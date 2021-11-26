import { AssetListItem, AuthClient, ClientOptions, DeviceListItem, EntitiesClient, ReportDefinitionResponse } from '@key-telematics/fleet-api-client';
import knex from 'knex';
import { initializeExpress } from './routes';

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
            console.log('error occured!')
            // Throttling 429 response will trigger the delay here and retry again
            if (e.status == 429) {
                await new Promise(resolve => setTimeout(resolve, i * 1000));
                lastError = e;
            }
            console.log(e);
            throw e;
        } 
    }
    throw lastError;
}


// Knex instance to sqlite db
const sql = knex({
    client: 'sqlite3',
    connection: {
        filename: "./sampledb.sqlite"
    },
    useNullAsDefault: true
});

const authClient = new AuthClient({
    url: process.env.KEY_HOST
})

const initialize = async () => {
    
    try {
        const apiKey = process.env.KEY_API_KEY;
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

        await initializeExpress({
            apiKey,
            basePath,
        });

        fetchData(api, ownerId);

    } catch (err) {
        console.error(err);
    }
}

// Login for access token
const login = async (username: string, password: string) => {
    return await retryOnThrottle(() => authClient.signIn({ username, password }), 5);
}

const fetchData = async (api: ApiClient, ownerId: string) => {
    // Devices
    // map out columns to match schema for demo purpose only, normally all columns would be persisted so no map needed
    const devices = (await retryOnThrottle(() => api.entities.listDevices(ownerId, undefined, 100), 5));
    await sql('devices').insert(devices.items.map((device: DeviceListItem) => {
        return {
            id: device.id,
            name: device.name,
            state: device.state
        }
    }));

    // Assets
    // map out columns to match schema for demo purpose only, normally all columns would be persisted so no map needed
    const assets = (await retryOnThrottle(() => api.entities.listAssets(ownerId, undefined, 100), 5));
    await sql('assets').insert(assets.items.map((asset: AssetListItem) => {
        return {
            id: asset.id,
            name: asset.name,
            state: asset.state,
            deviceId: asset.devices[0].id,
            ownerId: asset.owner.id,
            costCentreId: asset.costCentre.id
        }
    }));
}

// Startup node app
initialize();

process.on('SIGINT', function () { // catch when a user presses Ctrl-C
    console.log(`Caught SIGINT interrupt signal, terminating.`);
    process.exit(1);
});
