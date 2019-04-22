import winston from 'winston';

const options = {
  console: {
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
  file: {
    level: 'info',
    filename: 'logs/debug.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
};

const stream = {
  write: (message: any) => {
    logger.info(message);
  },
};

const logger = winston.createLogger({
  transports: [new winston.transports.Console(options.console), new winston.transports.File(options.file)],
  exitOnError: false, // do not exit on handled exceptions
});

export default logger;
