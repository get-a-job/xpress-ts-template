import app from "./app.js";
import config from "./config/config.js";
import logger from "./utils/logger.js"

app.listen(config.port, () => {
    logger.info(`🚀 Server running on port ${config.port}`);
});