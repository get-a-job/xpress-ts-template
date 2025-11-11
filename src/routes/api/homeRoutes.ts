import { Router } from "express";

import { getHome } from "../../controllers/api/homeController.js"

const router = Router();

router.get("/", getHome);

export default router;