import { Router } from "express";

import { getHome } from "../../controllers/web/homeController.js"

const router = Router();

router.get("/", getHome);

export default router;