import { Router } from "express";

import homeWebRoutes from "./homeRoutes.js";

const router = Router();
router.use("/", homeWebRoutes);

export default router;
