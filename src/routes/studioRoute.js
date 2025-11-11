import express from "express";

import {
  getStudioUser,
  getStudioAdmin,
  createStudio,
  updateStudio,
  deleteStudio,
} from "../controllers/studioControl.js";

const router = express.Router();

// routingnya
router.get("/", getStudioUser);
router.get("/admin", getStudioAdmin);
router.post("/admin", createStudio);
router.put("/admin/:id", updateStudio);
router.delete("/admin/:id", deleteStudio);

export default router;
