import express from "express";

import { getAllUsers, getUserById } from "../controllers/userControl.js";

const router = express.Router();

// routingnya
router.get("/", getAllUsers);
router.get("/:id", getUserById);
export default router;
