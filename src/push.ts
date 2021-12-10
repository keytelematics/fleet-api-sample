import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { ApiClient, fetchApi } from './apiClient';
import { processTelemetry } from './telemetry';
import path from 'path';
import { getLatestTelemetry, sql } from './database';
import { EntitiesClient } from '@key-telematics/fleet-api-client';

require('dotenv').config(); // Load .env file in project root as environment variables

type FirehoseResponse = {
    requestId: string;
    timestamp: number;
    records: [
        {
            data: string;
        }
    ]
}

const initializeExpress = async (api: ApiClient) => {

    const app = express();
    const port = 5000;

    app.use(express.json({ limit: '25mb' }));
    app.use(cors());

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    // Endpoint to get telemetry data from
    app.get('/telemetry', async (request: Request, response: Response, next: NextFunction) => {
        try {
            const data = await getLatestTelemetry();
            response.status(200).json(data);
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    app.post('/telemetry', async (request: Request, response: Response, next: NextFunction) => {
        console.log('firehose data pushed!')
        const authHeader = request.headers['x-amz-firehose-access-key'] || '';

        if (process.env.EXPORT_TASK_AUTH_HEADER != authHeader) {
            response.status(401).json({ 'message': 'Unauthorized!' });
        }

        const data = (request.body as FirehoseResponse);

        const records = data.records
            .map(record => JSON.parse(Buffer.from(record.data, 'base64').toString('ascii')));

        console.log(records);
        await processTelemetry(api, records)
        const timestamp = Math.floor(new Date().getTime() / 1000);
        console.log('timestamp', timestamp);
        response.status(200).json({ 'requestId': data.requestId, 'timestamp': timestamp });
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

        await initializeExpress(api);
        await fetchApi(api);
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
