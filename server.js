require('dotenv').config({ silent: true });

const app = require('./src/app');
const { sequelize } = require('./src/config/db');
const logger = require('./src/utils/logger');

(async () => {
  try {
    await sequelize.authenticate();
    logger.info('Database connected...');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  } catch (error) {
    logger.error(`Unable to connect to DB: ${error.message}`);
  }
})();
