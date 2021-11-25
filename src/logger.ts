export type Logger = { log: (message: string, data?: any) => void };

export let logger: Logger = {
    log: () => undefined
};

if ([1, '1', 'true', true].includes(process.env.DEBUG)) {
    logger = {
        log: (message: string, data?: any): void => {
            console.log(message, data);
        }
    }
}