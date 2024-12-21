import dotenv from 'dotenv';
import path from 'path';
import { logger } from './src/config/logger.js';

export const loadEnv = () => {
    dotenv.config();
    logger.debug('NODE_ENV: ' + process.env.NODE_ENV);
    const envPath = process.env.NODE_ENV.length
        ? path.resolve('.env')
        : path.resolve(path.dirname(''), 'apps', 'server', '.env');
    dotenv.config({ path: envPath });
    logger.debug('NODE_ENV: ' + process.env.NODE_ENV);
};
