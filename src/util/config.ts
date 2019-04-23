import * as dotenv from 'dotenv';
import logger from './logger';
import fs from 'fs';

let env;
switch (process.env.NODE_ENV) {
  case 'staging':
    env = '.env.staging';
    break;
  case 'production':
    env = '.env.production';
    break;
  default:
    if (fs.existsSync('.env')) {
      env = '.env';
    } else if (fs.existsSync('.env.example')) {
      env = '.env.example';
    } else {
      logger.error('No env file found');
      process.exit(1);
    }
}
logger.debug(`Using ${env} file to supply config environment variables`);
dotenv.config({ path: env });

export const PORT = process.env.PORT;
