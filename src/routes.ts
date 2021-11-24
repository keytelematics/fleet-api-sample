import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { AlertsApi, AlertsApiApiKeys, AssetsApi, AssetsApiApiKeys, AuthApi, AuthApiApiKeys, DevicesApi, DevicesApiApiKeys } from './api/api';

export const initializeExpress = async ({ apiKey, basePath }: { apiKey: string, basePath: string }) => {

    const app = express();
    const port = 5000;
    const deviceApi = new DevicesApi(basePath);
    const assetApi = new AssetsApi(basePath);
    const alertsApi = new AlertsApi(basePath);
    const authApi = new AuthApi(basePath);

    function defaultContentTypeMiddleware(req: Request, res, next) {
        if (req.path.includes('/data') || req.path.includes('/crash')) {
            req.headers['content-type'] = 'application/octet-stream';
        }
        next();
    }

    app.use(defaultContentTypeMiddleware);
    app.use(express.json({ limit: '25mb' }));
    app.use(cors());
    app.use(express.static('public'))

    app.get('/health', (_request: Request, response: Response, _next: NextFunction) => {
        response.status(200).json({ status: 'ok' });
    });

    app.get('/devices', async (request: Request, response: Response, _next: NextFunction) => {
        try {
            const ownerId = request.query.id as string;
            const devices = (await deviceApi.listDevices(ownerId));
            response.status(200).json({
                ...devices
            });
            // save devices to db
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    app.get('/device', async (request: Request, response: Response, _next: NextFunction) => {
        try {
            const deviceId = request.query.id as string;
            response.status(200).json({
                ...(await deviceApi.getDevice(deviceId))
            });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    app.get('/alerts', async (request: Request, response: Response, _next: NextFunction) => {
        try {
            const ownerId = request.query.id as string;
            const alerts = (await alertsApi.listAlerts(ownerId));
            response.status(200).json({
                ...alerts,
            });
            // save alerts to db
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    app.get('/alert', async (request: Request, response: Response, _next: NextFunction) => {
        try {
            const alertId = request.query.id as string;
            response.status(200).json({
                ...(await alertsApi.getAlert(alertId)),
            });
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    app.get('/assets', async (request: Request, response: Response, _next: NextFunction) => {
        try {
            const ownerId = request.query.id as string;
            const assets = (await assetApi.listAssets(ownerId));
            response.status(200).json({
                ...assets
            });
            // save assets to db
        } catch (err) {
            response.status(500).json({ error: err.message });
        }
    });

    app.listen(port, () => {

        // set API Key from environment variables
        deviceApi.setApiKey(DevicesApiApiKeys.access_token, apiKey);
        assetApi.setApiKey(AssetsApiApiKeys.access_token, apiKey);
        alertsApi.setApiKey(AlertsApiApiKeys.access_token, apiKey);
        authApi.setApiKey(AuthApiApiKeys.access_token, apiKey);

        console.log(`Server running on port ${port}.`);
    });

};
