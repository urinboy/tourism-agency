const express = require("express");
const { getTours, createTour, updateTour, deleteTour } = require("../controllers/tourController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getTours);  // getTours to'g'ri chaqirilganini tekshiring
router.post("/", authMiddleware, createTour);  // createTour to'g'ri chaqirilganini tekshiring
router.put("/:id", authMiddleware, updateTour);  // updateTour to'g'ri chaqirilganini tekshiring
router.delete("/:id", authMiddleware, deleteTour);  // deleteTour to'g'ri chaqirilganini tekshiring

module.exports = router;
