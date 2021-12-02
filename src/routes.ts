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
            
            const telemetryData = await sql
                .select('*')
                .from('telemetry')
                .join('assets', 'telemetry.assetId', '=', 'assets.id')
                .join('devices','assets.deviceId', '=', 'devices.id');

            response.status(200).json({
                telemetry: telemetryData
            });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });

};
