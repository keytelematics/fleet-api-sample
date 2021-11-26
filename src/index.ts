import { AssetListItem, AuthClient, ClientOptions, DeviceListItem, EntitiesClient } from '@key-telematics/fleet-api-client';
import knex from 'knex';
import { initializeExpress } from './routes';

require('dotenv').config(); // Load .env file in project root as environment variables

type ApiClient = {
    entities: EntitiesClient,
}

let loginCredentials;

// retry exponential backoff promise
const delay = retryCount =>
    new Promise(resolve => setTimeout(resolve, 10 ** retryCount));

// Knex instance to sqlite db
const sql = knex({
    client: 'sqlite3',
    connection: {
        filename: "./sampledb.sqlite"
    }
});

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
const login = async (username: string, password: string, retryCount: number = 0, lastError: any = null) => {

    // backoff in [1ms, 10ms, 100ms, 1s, 10s]
    if (retryCount > 5)
        return new Error(lastError);

    try {
        return await new AuthClient({
            url: process.env.KEY_HOST
        }).signIn({ username, password })
    } catch (e) {
        // Throttling 429 response will trigger the delay here and retry again
        if (e.status == 429) {
            console.log('Api request throttled, request backoff', { error: e });
            await delay(retryCount);
            return login(username, password, retryCount + 1, e);
        }
        return;
    }
}

const getDevices = async (api: ApiClient, ownerId: string, retryCount: number = 0, lastError: any = null) => {
    console.log('Fetching devices', { ownerId, retryCount });

    // backoff in [1ms, 10ms, 100ms, 1s, 10s]
    if (retryCount > 5)
        return new Error(lastError);

    try {
        // get first 100 devices
        return api.entities.listDevices(ownerId, undefined, 100);
    } catch (e) {
        // Throttling 429 response will trigger the delay here and retry again
        if (e.status == 429) {
            console.log('Api request throttled, request backoff for fetching devices', { ownerId, retryCount, error: e });
            await delay(retryCount);
            return getDevices(api, ownerId, retryCount + 1, e);
        }
        return;
    }
}

const getAssets = async (api: ApiClient, ownerId: string, retryCount: number = 0, lastError: any = null) => {
    console.log('Fetching assets', { ownerId, retryCount });

    if (retryCount > 5)
        return new Error(lastError);

    try {
        // get first 100 assets
        return api.entities.listAssets(ownerId, undefined, 100);
    } catch (e) {
        // Throttling 429 response will trigger the delay here and retry again
        if (e.status == 429) {
            console.log('Api request throttled, request backoff for fetching assets', { ownerId, retryCount, error: e });
            await delay(retryCount);
            return getDevices(api, ownerId, retryCount + 1, e);
        }
        return;
    }
}


const fetchData = async (api: ApiClient, ownerId: string) => {

    // Devices
    // map out columns to match schema for demo purpose only, normally all columns would be persisted so no map needed
    const devices = (await getDevices(api, ownerId)).items.map((device: DeviceListItem) => {
        return {
            id: device.id,
            name: device.name,
            state: device.state
        }
    });
    await sql('devices').insert(devices);

    // Assets
    // map out columns to match schema for demo purpose only, normally all columns would be persisted so no map needed
    const assets = (await getAssets(api, ownerId)).items.map((asset: AssetListItem) => {
        return {
            id: asset.id,
            name: asset.name,
            state: asset.state,
            deviceId: asset.devices[0].id,
            ownerId: asset.owner.id,
            costCentreId: asset.costCentre.id
        }
    });

    await sql('assets').insert(assets);
}



initialize();

process.on('SIGINT', function () { // catch when a user presses Ctrl-C
    console.log(`Caught SIGINT interrupt signal, terminating.`);
    process.exit(1);
});
