const express = require("express");
const { createBooking, getUserBookings, getAllBookings, cancelBooking } = require("../controllers/bookingController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.get("/", authMiddleware, getUserBookings);
router.get("/all", authMiddleware, getAllBookings);
router.delete("/:id", authMiddleware, cancelBooking);

module.exports = router;
