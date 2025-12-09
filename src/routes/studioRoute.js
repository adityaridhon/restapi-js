import express from "express";

import {
  getStudioUser,
  getStudioAdmin,
  getStudioByIdUser,
  getStudioByIdAdmin,
  createStudio,
  updateStudio,
  deleteStudio,
} from "../controllers/studioControl.js";

const router = express.Router();

// Admin routes
router.get("/admin", getStudioAdmin);
router.post("/admin", createStudio);
router.get("/admin/:id", getStudioByIdAdmin);
router.put("/admin/:id", updateStudio);
router.delete("/admin/:id", deleteStudio);

// User routes
router.get("/", getStudioUser);
router.get("/:id", getStudioByIdUser);

export default router;
