import { AssetListItem, AuthClient, DeviceListItem, EntitiesClient } from '@key-telematics/fleet-api-client';
import { sql } from './database';
import { initializeExpress } from './routes';
import axios from 'axios';

require('dotenv').config(); // Load .env file in project root as environment variables

export interface IChangeNotification {
    type: 'changenotification';
    operation: 'added' | 'modified' | 'deleted' | string;
    date: string;
    doc: {
        id: string;
        ownerId?: string;
        type?: string;
    };
}

type ApiClient = {
    entities: EntitiesClient,
}

let loginCredentials;


// retry exponential backoff promise
async function retryOnThrottle<T>(callback: () => Promise<T>, tries: number): Promise<T> {
    let lastError = null;
    for (var i = 1; i <= tries; i++) {
        try {
            return callback();
        } catch (e) {
            // Throttling 429 response will trigger the delay here and retry again
            if (e.status == 429) {
                await new Promise(resolve => setTimeout(resolve, i * 1000));
                lastError = e;
                continue;
            }
            throw e;
        }
    }
    throw lastError;
}

const authClient = new AuthClient({
    url: process.env.KEY_HOST
})

const initialize = async () => {

    try {
        const basePath = process.env.KEY_HOST;
        const ownerId = process.env.OWNER_ID;
        const username = process.env.USERNAME;
        const password = process.env.PASSWORD;

        // login with user to get access token to be used in api calls
        loginCredentials = await login(username, password);

        // api object to be used for api calls for
        const api = {
            entities: new EntitiesClient({
                url: basePath,
                accessToken: loginCredentials.accessToken
            }),
        };

        await initializeExpress();
        await fetchApiData(api, ownerId);
        await fetchTelemetry(api);
    } catch (err) {
        console.error(err);
    }
}

const deleteEntity = async (data: any) => {
    // doc type not known here, trying to set state to delete on all tables where it would match by id
    console.log('trying to delete from assets table with id', data.id);
    await sql('assets')
        .where({ id: data.id })
        .update({ state: 'deleted' });

    console.log('trying to delete from devices table with id', data.id);
    await sql('devices')
        .where({ id: data.id })
        .update({ state: 'deleted' });
}

const createOrUpdateEntity = async (type: string, data: any) => {
    // More entities can be added in the function along with more tables as more entities are needed
    switch (type) {
        case 'asset':
            await sql('assets')
                .insert({
                    id: data.id,
                    name: data.name,
                    state: data.state
                })
                .onConflict('id')
                .merge();
            break;
        case 'device':
            await sql('devices')
                .insert({
                    id: data.id,
                    name: data.name,
                    state: data.state,
                    assetId: data.asset?.id
                })
                .onConflict('id')
                .merge();
            break;
        default:
            console.log('Entity unknown, added to switch to handle this entity')
    }
};

// Login for access token
const login = async (username: string, password: string) => {
    return await retryOnThrottle(() => authClient.signIn({ username, password }), 5);
}

const fetchApiData = async (api: ApiClient, ownerId: string) => {
    console.log('Fetching data from api');

    /******** Assets *******/
    // map out columns to match schema for demo purpose only, normally all columns would be persisted
    const assets = await retryOnThrottle(() => api.entities.listAssets(ownerId, undefined, 100), 5);

    for (let index = 0; index < assets.items.length; index++) {
        const asset = assets.items[index];
        await createOrUpdateEntity('asset', {
            id: asset.id,
            name: asset.name,
            state: asset.state
        });
    }
  
    /******** Devices *******/
    // map out columns to match schema for demo purpose only, normally all columns would be persisted
    const devices = await retryOnThrottle(() => api.entities.listDevices(ownerId, undefined, 100), 5);

    for (let index = 0; index < devices.items.length; index++) {
        const device = devices.items[index];
        await createOrUpdateEntity('device', {
            id: device.id,
            name: device.name,
            state: device.state,
            assetId: device.asset?.id
        });
    }
}

const fetchTelemetry = async (api: ApiClient) => {
    console.log('Fetching telemetry from stream');

    // Get data from telemetry stream over HTTP and start mapping out to telemetry, events, trips
    try {
        while (true) {
            console.log('fetching export task stream data');
            const data = (await axios.get(process.env.EXPORT_TASK_HOST, {
                headers: {
                    'x-access-token': process.env.EXPORT_TASK_API_KEY,
                    'accept-encoding': 'gzip',
                    'connection': 'keep-alive'
                }
            })).data;

            for (let count = 0; count < data.items.length; count++) {
                const item = data.items[count];

                switch (item.type) {
                    case 'event':
                        console.log('processing event data');
                        // not all fields mapped here to save, just for demo purpose
                        const eventDb = {
                            id: item.id,
                            ownerId: item.owner.id,
                            ownerName: item.owner.name,
                            originId: item.origin.id,
                            eventDate: item.eventDate,
                            eventClass: item.eventClass,
                            eventType: item.eventType,
                            assetId: item.details.asset.id,
                        };

                        await sql('events')
                            .insert(eventDb)
                            .onConflict('id')
                            .merge();

                        break;
                    case 'telemetry':
                        console.log('processing telemetry data');
                        // not all fields mapped here to save, just for demo purpose
                        const telemetryDb = {
                            originId: item.origin.id,
                            date: item.date,
                            speed: item.location.speed,
                            lon: item.location.lon,
                            lat: item.location.lat,
                            address: item.location.address,
                            assetId: item.asset.id,
                        };

                        // save to historical table
                        await sql('telemetry')
                            .insert(telemetryDb)
                            .onConflict(['originId', 'date'])
                            .merge();

                        // save to latest table
                        await sql('telemetry_latest')
                            .insert(telemetryDb)
                            .onConflict('originId')
                            .merge();

                        break;
                    case 'trip':
                        console.log('processing trip data');
                        // not all fields mapped here to save, just for demo purpose
                        const tripDb = {
                            id: item.id,
                            ownerId: item.owner.id,
                            ownerName: item.owner.name,
                            assetId: item.asset.id,
                            tripType: item.tripType,
                            dateStart: item.dateStart,
                            dateEnd: item.dateEnd,
                            records: item.tripType,
                        };

                        await sql('trips')
                            .insert(tripDb)
                            .onConflict('id')
                            .merge();

                        break;
                    case 'changenotification':
                        switch (item.operation) {
                            case 'added':
                            case 'modified':

                                // add more entities here to insert or update in the sqlite db
                                switch (item.doc.type) {
                                    case 'asset':
                                        const asset = await api.entities.getAsset(item.doc.id);
                                        await createOrUpdateEntity(item.doc.type, asset);
                                        break;
                                    case 'device':
                                        const device = await api.entities.getDevice(item.doc.id);
                                        await createOrUpdateEntity(item.doc.type, device);
                                        break; 
                                }

                                break;
                            case 'deleted':
                                await deleteEntity(item.doc);
                                break;
                            default:
                                console.log('Unknown operation', item.operation);
                        }
                        break;
                }
            }

            const id = data.id;

            // id field was found in previous GET operation and can now safely send delete, else ignore action
            if (id === undefined) {
                console.log('No id value found, waiting 30 sec')
                await new Promise(resolve => setTimeout(resolve, 30000));
            } else {
                await axios.delete(`${process.env.EXPORT_TASK_HOST}/${id}`, {
                    headers: {
                        'x-access-token': process.env.EXPORT_TASK_API_KEY,
                        'accept-encoding': 'gzip',
                        'connection': 'keep-alive'
                    }
                });
                console.log('deleting stream data with id', id);
            }
        }
    } catch (error) {
        console.log('Telemetry stream failed', error);
    }
}

// Startup node app
initialize();

process.on('SIGINT', function () { // catch when a user presses Ctrl-C
    console.log(`Caught SIGINT interrupt signal, terminating.`);
    process.exit(1);
});
