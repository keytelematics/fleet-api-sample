import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { sql } from './database';

export const initializeExpress = async () => {

    const app = express();
    const port = 5000;

    app.use(express.json({ limit: '25mb' }));
    app.use(cors());

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

    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });

};
