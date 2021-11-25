import { EntitiesClient, ClientOptions } from '@key-telematics/fleet-api-client';
import { logger } from '../logger';

type ApiClient = {
    entities: EntitiesClient,
}

const clientOpts = {
    url: 'http://api.us1.kt1.io/v2/fleet',
    logger,
    apiKey: process.env.API_KEY
};

const getApiClient = (opts: ClientOptions): ApiClient => {
    return {
        entities: new EntitiesClient(opts),
    }
}
 
export const api = getApiClient(clientOpts);