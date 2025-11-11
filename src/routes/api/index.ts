import { Router } from "express";

import homeApiRoutes from "./homeRoutes.js";

const router = Router();
router.use("/", homeApiRoutes);

export default router;
