import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { sql } from './database';

export const initializeExpress = async () => {

    const app = express();
    const port = 5000;

    app.use(express.json({ limit: '25mb' }));
    app.use(cors());

    app.get('/data', async (request: Request, response: Response, _next: NextFunction) => {
        try {
            const assets = await sql('assets').select()
            const devices = await sql('devices').select();

            response.status(200).json({
                assets,
                devices
            }); 
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });

};
