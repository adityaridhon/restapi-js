import express from "express";

import {
  getFasilitas,
  createFasilitas,
  updateFasilitas,
  deleteFasilitas,
} from "../controllers/fasilitasControl.js";

const router = express.Router();

// routingnya

router.get("/", getFasilitas);
router.post("/admin", createFasilitas);
router.put("/admin/:id", updateFasilitas);
router.delete("/admin/:id", deleteFasilitas);

export default router;
