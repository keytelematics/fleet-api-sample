import { logger } from "../logger";
import { api } from "./api";

const delay = retryCount =>
    new Promise(resolve => setTimeout(resolve, 10 ** retryCount));
    
export const getEvents = async (ownerId: string, retryCount: number = 0, lastError: any = null) => {
    logger.log('Fetching events', { ownerId, retryCount });
    
    if (retryCount > 5)
        return new Error(lastError);

    try {
        return api.entities.(ownerId);
    } catch (e) {
        // Throttling 429 response will trigger the delay here and retry again
        logger.log('Error fetching events', { ownerId, retryCount, error: e });
        await delay(retryCount);
        return getEvents(ownerId, retryCount + 1, e);
    }
}
