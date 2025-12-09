import {
  getAllBooking,
  createBooking,
  payBooking,
  getPenghasilanTotal,
  getPenghasilanByStudio,
  getBookingIDUser,
  getBookingIDAdmin,
} from "../controllers/bookingControl.js";
import express from "express";

const router = express.Router();

// Admin routes
router.get("/admin/penghasilan", getPenghasilanTotal);
router.get("/admin/penghasilan/:studio_id", getPenghasilanByStudio);
router.get("/admin", getAllBooking);
router.get("/admin/:id", getBookingIDAdmin);
// User routes
router.post("/", createBooking);
router.put("/:booking_id", payBooking);
router.get("/:id", getBookingIDUser);

export default router;
