import { getLatestTelemetry } from './database';
import axios from 'axios';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import { ApiClient, fetchApi } from './apiClient';
import { processTelemetry } from './telemetry';
import { EntitiesClient } from '@key-telematics/fleet-api-client';

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
        };

        await initializeExpress();
        await fetchApi(api);
        await fetchTelemetry(api);
    } catch (err) {
        console.error(err);
    }
}

const fetchTelemetry = async (api: ApiClient) => {
    console.log('Fetching telemetry from stream');

    // Get data from telemetry stream over HTTP and start mapping out to telemetry, events, trips
    try {
        while (true) {
            console.log('fetching export task stream data');
            const data = (await axios.get(process.env.EXPORT_TASK_HOST, {
                headers: {
                    'x-access-token': process.env.EXPORT_TASK_API_KEY,
                    'accept-encoding': 'gzip',
                    'connection': 'keep-alive'
                }
            })).data;

            await processTelemetry(api, data.items);

            const id = data.id;

            // id field was found in previous GET operation and can now safely send delete, else ignore action
            if (id === undefined) {
                console.log('No id value found, waiting 30 sec')
                await new Promise(resolve => setTimeout(resolve, 30000));
            } else {
                await axios.delete(`${process.env.EXPORT_TASK_HOST}/${id}`, {
                    headers: {
                        'x-access-token': process.env.EXPORT_TASK_API_KEY,
                        'accept-encoding': 'gzip',
                        'connection': 'keep-alive'
                    }
                });
                console.log('deleting stream data with id', id);
            }
        }
    } catch (error) {
        console.log('Telemetry stream failed', error);
    }
}

// Startup node app
initialize();

process.on('SIGINT', function () { // catch when a user presses Ctrl-C
    console.log(`Caught SIGINT interrupt signal, terminating.`);
    process.exit(1);
});
