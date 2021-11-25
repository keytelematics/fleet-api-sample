import { initializeExpress } from './routes';

require('dotenv').config(); // Load .env file in project root as environment variables

const initialize = async () => {
    try {
        const apiKey = process.env.KEY_API_KEY;
        const basePath = process.env.KEY_HOST;

        await initializeExpress({
            apiKey,
            basePath,
        });
    } catch (err) {
        console.error(err);
    }
}

initialize();

process.on('SIGINT', function () { // catch when a user presses Ctrl-C
    console.log(`Caught SIGINT interrupt signal, terminating.`);
    process.exit(1);
});
