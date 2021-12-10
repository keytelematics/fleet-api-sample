import { EntitiesClient } from "@key-telematics/fleet-api-client";
import { createOrUpdateEntity } from "./database";

export type ApiClient = {
    entities: EntitiesClient,
}
 
 

export async function retryOnThrottle<T>(callback: () => Promise<T>, tries: number): Promise<T> {
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

export const fetchApi = async (api: ApiClient) => {
    console.log('Fetching data from api');

    const ownerId = process.env.OWNER_ID;

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
