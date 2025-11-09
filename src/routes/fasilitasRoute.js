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
router.post("/", createFasilitas);
router.put("/:id", updateFasilitas);
router.delete("/:id", deleteFasilitas);

export default router;
