import {
  registerUser,
  registerAdmin,
  loginUser,
  loginAdmin,
} from "../controllers/authControl.js";

import express from "express";

const router = express.Router();

router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
