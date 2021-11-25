import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { get } from './database';

export const initializeExpress = async ({ apiKey, basePath }: { apiKey: string, basePath: string }) => {

    const app = express();
    const port = 5000;

    app.use(express.json({ limit: '25mb' }));
    app.use(cors());

    app.get('/health', (_request: Request, response: Response, _next: NextFunction) => {
        response.status(200).json({ status: 'ok' });
    });

    app.get('/assets', async (request: Request, response: Response, _next: NextFunction) => {
         try {
            response.status(200).json({
                ...get('assets')
            });
         } catch (err) {
             response.status(500).json({ error: err.message });
         }
    });

    app.get('/devices', async (request: Request, response: Response, _next: NextFunction) => {
         try {
            response.status(200).json({
                ...get('devices')
            });
         } catch (err) {
             response.status(500).json({ error: err.message });
         }
    });

    app.get('/events', async (request: Request, response: Response, _next: NextFunction) => {
         try {
            response.status(200).json({
                ...get('events')
            });
         } catch (err) {
             response.status(500).json({ error: err.message });
         }
    });

    app.get('/telemetry', async (request: Request, response: Response, _next: NextFunction) => {
         try {
            response.status(200).json({
                ...get('telemetry')
            });
         } catch (err) {
             response.status(500).json({ error: err.message });
         }
    });

    app.get('/trips', async (request: Request, response: Response, _next: NextFunction) => {
        try {
            response.status(200).json({
                ...get('trips')
            });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
   });

    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });

};
