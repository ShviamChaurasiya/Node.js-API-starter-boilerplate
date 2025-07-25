const { createLogger, format, transports } = require('winston');
const path = require('path');

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    // Log to console
    new transports.Console(),

    // Log to file
    new transports.File({ filename: path.join(__dirname, '../../logs/app.log') })
  ]
});

module.exports = logger;
