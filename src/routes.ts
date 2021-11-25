import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

export const initializeExpress = async ({ apiKey, basePath }: { apiKey: string, basePath: string }) => {

    const app = express();
    const port = 5000;

    function defaultContentTypeMiddleware(req: Request, res, next) {
        if (req.path.includes('/data') || req.path.includes('/crash')) {
            req.headers['content-type'] = 'application/octet-stream';
        }
        next();
    }

    app.use(defaultContentTypeMiddleware);
    app.use(express.json({ limit: '25mb' }));
    app.use(cors());

    app.get('/health', (_request: Request, response: Response, _next: NextFunction) => {
        response.status(200).json({ status: 'ok' });
    });

    app.get('/devices', async (request: Request, response: Response, _next: NextFunction) => {
        // try {
        //     const ownerId = request.query.id as string;
        //     const devices = (await deviceApi.listDevices(ownerId));
        //     response.status(200).json({
        //         ...devices
        //     });
        //     // save devices to db
        // } catch (err) {
        //     response.status(500).json({ error: err.message });
        // }
    });

    app.get('/device', async (request: Request, response: Response, _next: NextFunction) => {
        // try {
        //     const deviceId = request.query.id as string;
        //     response.status(200).json({
        //         ...(await deviceApi.getDevice(deviceId))
        //     });
        // } catch (err) {
        //     response.status(500).json({ error: err.message });
        // }
    });

    app.get('/alerts', async (request: Request, response: Response, _next: NextFunction) => {
        // try {
        //     const ownerId = request.query.id as string;
        //     const alerts = (await alertsApi.listAlerts(ownerId));
        //     response.status(200).json({
        //         ...alerts,
        //     });
        //     // save alerts to db
        // } catch (err) {
        //     response.status(500).json({ error: err.message });
        // }
    });

    app.get('/alert', async (request: Request, response: Response, _next: NextFunction) => {
        // try {
        //     const alertId = request.query.id as string;
        //     response.status(200).json({
        //         ...(await alertsApi.getAlert(alertId)),
        //     });
        // } catch (err) {
        //     response.status(500).json({ error: err.message });
        // }
    });

    app.get('/assets', async (request: Request, response: Response, _next: NextFunction) => {
        // try {
        //     const ownerId = request.query.id as string;
        //     const assets = (await assetApi.listAssets(ownerId));
        //     response.status(200).json({
        //         ...assets
        //     });
        //     // save assets to db
        // } catch (err) {
        //     response.status(500).json({ error: err.message });
        // }
    });

    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });

};
