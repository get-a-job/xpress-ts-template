import pino from "pino";
import type { LoggerOptions } from "pino";

const options: LoggerOptions = {
    ...(process.env.NODE_ENV === "development"
        ? {
            transport: {
                target: "pino-pretty",
                options: { colorize: true },
            },
        }
        : {}),
};

const logger = pino(options);

export default logger;
