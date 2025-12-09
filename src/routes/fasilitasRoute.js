import express from "express";

import {
  getFasilitas,
  getFasilitasById,
  createFasilitas,
  updateFasilitas,
  deleteFasilitas,
} from "../controllers/fasilitasControl.js";

const router = express.Router();

// routingnya khusus admin
router.get("/admin", getFasilitas);
router.post("/admin", createFasilitas);
router.get("/admin/:id", getFasilitasById);
router.put("/admin/:id", updateFasilitas);
router.delete("/admin/:id", deleteFasilitas);

export default router;
