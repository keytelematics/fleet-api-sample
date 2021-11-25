import { logger } from "../logger";
import { api } from "./api";

const delay = retryCount =>
    new Promise(resolve => setTimeout(resolve, 10 ** retryCount));

export const getDevices = async (ownerId: string, retryCount: number = 0, lastError: any = null) => {
    logger.log('Fetching devices', { ownerId, retryCount });
    
    if (retryCount > 5)
        return new Error(lastError);

    try {
        return api.entities.listDevices(ownerId);
    } catch (e) {
        // Throttling 429 response will trigger the delay here and retry again
        logger.log('Error fetching devices', { ownerId, retryCount, error: e });
        await delay(retryCount);
        return getDevices(ownerId, retryCount + 1, e);
    }
}

export const getDevice = async (deviceId: string, retryCount: number = 0, lastError: any = null) => {
    logger.log('Fetching device', { deviceId, retryCount });
    
    if (retryCount > 5)
        return new Error(lastError);

    try {
        return api.entities.getDevice(deviceId);
    } catch (e) {
        // Throttling 429 response will trigger the delay here and retry again
        logger.log('Error fetching device', { deviceId, retryCount, error: e });
        await delay(retryCount);
        return getDevice(deviceId, retryCount + 1, e);
    }
}
