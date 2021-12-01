import { AssetListItem, AuthClient, DeviceListItem, EntitiesClient } from '@key-telematics/fleet-api-client';
import { sql } from './database';
import { initializeExpress } from './routes';
import axios from 'axios';

require('dotenv').config(); // Load .env file in project root as environment variables

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

        fetchApiData(api, ownerId);

    } catch (err) {
        console.error(err);
    }
}

// Login for access token
const login = async (username: string, password: string) => {
    return await retryOnThrottle(() => authClient.signIn({ username, password }), 5);
}

const fetchApiData = async (api: ApiClient, ownerId: string) => {
    // Devices
    // map out columns to match schema for demo purpose only, normally all columns would be persisted so no map needed
    const devices = await retryOnThrottle(() => api.entities.listDevices(ownerId, undefined, 100), 5);
    await sql('devices').insert(devices.items.map((device: DeviceListItem) => {
        return {
            id: device.id,
            name: device.name,
            state: device.state
        }
    }));

    // Assets
    // map out columns to match schema for demo purpose only, normally all columns would be persisted so no map needed
    const assets = await retryOnThrottle(() => api.entities.listAssets(ownerId, undefined, 100), 5);
    await sql('assets').insert(assets.items.map((asset: AssetListItem) => {
        return {
            id: asset.id,
            name: asset.name,
            state: asset.state,
            deviceId: asset.devices ? asset.devices[0].id : null,
            ownerId: asset.owner.id,
            costCentreId: asset.costCentre.id
        }
    }));

    // Get data from telemetry stream over HTTP and start mapping out to telemetry, events, trips
    try {
        const data = (await axios.get('https://export.eu1.kt1.io/v2/stream', {
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
                    // not all fields mapped here to save, just for demo purpose
                    const eventDb = {
                        id: item.id,
                        ownerId: item.ownerId,
                        ownerName: item.ownerName,
                        originId: item.originId,
                        date: item.date,
                        eventDate: item.eventDate,
                        creationDate: item.creationDate,
                        revoked: item.revoked,
                        eventClass: item.eventClass,
                        eventType: item.eventType,
                        assetId: item.assetId,
                        assetName: item.assetName,
                    };
                    await sql('events').insert(eventDb);
                    console.log('event record consumed!')
                    break;
                case 'telemetry':
                    // not all fields mapped here to save, just for demo purpose
                    const telemetryDb = {
                        originId: item.originId,
                        ownerId: item.ownerId,
                        date: item.date,
                        received: item.received,
                        priority: item.telemetry['priority'],
                        eventId: item.telemetry['eventId'],
                        ignition: item.telemetry['ignition'],
                        moving: item.telemetry['moving'],
                        motion_end: item.telemetry['motion_end'],
                        gsm_signal: item.telemetry['gsm_signal'],
                        battery_perc: item.telemetry['battery_perc'],
                        driving: item.telemetry['driving'],
                        trip: item.telemetry['trip'],
                        movement: item.telemetry['movement'],
                        assetId: item.assetId,
                        assetName: item.assetName,
                    };

                    // save to sqlite db
                    await sql('telemetry').insert(telemetryDb);

                    // log out message of saved record
                    console.log('telemetry record consumed!')
                    break;
                case 'trip':
                    // not all fields mapped here to save, just for demo purpose
                    const tripDb = {
                        id: item.id,
                        ownerId: item.ownerId,
                        assetId: item.assetId,
                        tripType: item.tripType, 
                        dateStart: item.tripType,
                        dateEnd: item.assetId,
                        records: item.tripType,
                        assetName: item.assetName,
                        driveTime: item.stats.driveTime,
                        idleTime: item.stats.idleTime,
                        distance: item.stats.distance,
                    };

                    await sql('trips').insert(tripDb);

                    console.log('trip record consumed!')
                    break;
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
