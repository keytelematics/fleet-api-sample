import { ApiClient, retryOnThrottle } from "./apiClient";
import { createOrUpdateEntity, deleteEntity, sql } from "./database";

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

export const processTelemetry = async (api: ApiClient, data: any) => {
    for (let count = 0; count < data.length; count++) {
        const item = data[count];

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
                console.log('processing change notification data');
                switch (item.operation) {
                    case 'added':
                    case 'modified':
                        // add more entities here to insert or update in the sqlite db
                        switch (item.doc.type) {
                            case 'asset':
                                const asset = await retryOnThrottle(() => api.entities.getAsset(item.doc.id), 5);
                                console.log(asset);
                                await createOrUpdateEntity(item.doc.type, asset);
                                break;
                            case 'device':
                                const device = await retryOnThrottle(() => api.entities.getDevice(item.doc.id), 5);
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
}