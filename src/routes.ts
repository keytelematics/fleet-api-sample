import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
//import { get } from './database';

export const initializeExpress = async ({ apiKey, basePath }: { apiKey: string, basePath: string }) => {

    const app = express();
    const port = 5000;

    app.use(express.json({ limit: '25mb' }));
    app.use(cors());

    app.get('/data', async (request: Request, response: Response, _next: NextFunction) => {
         try {
            // response.status(200).json({
            //     ...get('assets')
            // });
         } catch (err) {
             response.status(500).json({ error: err.message });
         }
         // write query here to fetch and join data to return from sqlite that was retrieved by api
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });

};
