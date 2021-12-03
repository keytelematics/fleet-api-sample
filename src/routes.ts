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
            const data = await Promise.all((await sql.select('*').from('telemetry')).map(async telem => {

                const assetName = (await sql('assets').where('id', telem.assetId).first())?.name ?? '';
                const deviceSerial = (await sql('devices').where('assetId', telem.assetId).first())?.name ?? '';

                return {
                    assetName: assetName,
                    deviceSerial: deviceSerial,
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
