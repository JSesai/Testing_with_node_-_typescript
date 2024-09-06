
import winston, { format } from 'winston';

const { timestamp, combine, json } = format

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(), 
    json()
  ),
//   defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


export const buildLogger = (service: string) => {

    return{
        log: (message: string) => logger.log('info',{ message, service}),
        error: (message: string) => logger.error('error', {message, service}),
        warn: (message: string) => logger.log('warn', {message, service}),
    }
  
}