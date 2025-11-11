import type { Express } from "express";

import webRoutes from "./web/index.js";
import apiRoutes from "./api/index.js";

export function registerRoutes(app: Express) {
    app.use("/", webRoutes);
    app.use("/api", apiRoutes);
}
