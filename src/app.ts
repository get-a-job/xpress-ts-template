import express from "express";
import path from "path";
import { errorHandler } from "./middlewares/errorHandler.js";
import expressLayouts from "express-ejs-layouts";

import homeWebRoutes from "./routes/web/homeRoutes.js";
import homeApiRoutes from "./routes/api/homeRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

// Routes
app.use("/", homeWebRoutes);
app.use("/api", homeApiRoutes);

app.use(errorHandler);

export default app;