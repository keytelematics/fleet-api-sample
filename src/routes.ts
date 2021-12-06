import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { sql } from './database';
import path from 'path';

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

export const initializeExpress = async () => {

    const app = express();
    const port = 5000;

    app.use(express.json({ limit: '25mb' }));
    app.use(cors());

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    // Endpoint to get telemetry data from
    app.get('/telemetry', async (request: Request, response: Response, _next: NextFunction) => {
        try {
            const data = await Promise.all((await sql
                .select({
                    assetName: 'assets.name',
                    deviceSerial: 'devices.name',
                    date: 'telemetry_latest.date',
                    lon: 'telemetry_latest.lon',
                    lat: 'telemetry_latest.lat',
                    speed: 'telemetry_latest.speed',
                    address: 'telemetry_latest.address'
                })
                .from('telemetry_latest')
                .join('assets', 'telemetry_latest.assetId', 'assets.id')
                .join('devices', 'assets.id', 'devices.assetId')).map(async telem => {

                    return {
                        assetName: telem.assetName,
                        deviceSerial: telem.deviceSerial,
                        date: telem.date,
                        lon: telem.lon,
                        lat: telem.lat,
                        speed: telem.speed,
                        address: telem.address,
                    };
                }));

            response.status(200).json(data);
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    // Endpoint to push data to update, used by change notifications
    app.post('/updates', async (request: Request, response: Response, _next: NextFunction) => {
        try {

            const data = JSON.parse(request.body) as IChangeNotification;

            switch (data.operation) {
                case 'added':
                case 'modified':
                    await createOrUpdateData(data.doc);
                    break;
                case 'deleted':
                    await deleteData(data.doc);
                    break;
                default:
                    console.log('Unknown operation, could not process change');
                    response.status(500).json({ message: 'Unknown operation, could not process change' });
            }

            response.status(200).json({});

        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });


    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });


    const deleteData = async (data: any) => {
        // doc type not known here, trying to set state to delete on all tables where it would match by id
        await sql('assets')
            .where({ id: data.id })
            .update({ state: 'deleted' });

        await sql('devices')
            .where({ id: data.id })
            .update({ state: 'deleted' });
    }

    const createOrUpdateData = async (data: any) => {
        if (data.type == 'asset') {
            await sql('assets')
                .insert({
                    id: data.id,
                    name: data.name,
                    state: data.state
                })
                .onConflict('id')
                .merge();
        }
        else if (data.type == 'device') {
            await sql('devices')
                .insert({
                    id: data.id,
                    name: data.name,
                    state: data.state,
                    assetId: data.asset?.id
                })
                .onConflict('id')
                .merge();
        }
    }

};
