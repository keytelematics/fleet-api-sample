import { fetchApi, fetchTelemetry, getLatestTelemetry } from './database';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import { EntitiesClient } from '@key-telematics/fleet-api-client';
import axios from 'axios';

require('dotenv').config(); // Load .env file in project root as environment variables

const initializeExpress = async () => {

    const app = express();
    const port = 5000;

    app.use(express.json({ limit: '25mb' }));
    app.use(cors());

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    // Endpoint to get telemetry
    app.get('/telemetry', async (request: Request, response: Response, next: NextFunction) => {
        try {
            const data = await getLatestTelemetry();
            response.status(200).json(data);
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });
};

const initialize = async () => {

    try {
        const api = {
            entities: new EntitiesClient({
                url: process.env.KEY_HOST,
                apiKey: process.env.API_KEY
            }),
            exportTask: axios.create({
                baseURL: `${process.env.EXPORT_TASK_HOST}/v2/stream`,
                headers: {
                    'x-access-token': process.env.EXPORT_TASK_API_KEY,
                    'accept-encoding': 'gzip',
                    'connection': 'keep-alive'
                }
            }),
        };

        await initializeExpress();
        await fetchApi(api);
        await fetchTelemetry(api);
    } catch (err) {
        console.error(err);
    }
}

// Startup node app
initialize();

process.on('SIGINT', function () { // catch when a user presses Ctrl-C
    console.log(`Caught SIGINT interrupt signal, terminating.`);
    process.exit(1);
});
