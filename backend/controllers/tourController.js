// src/controllers/tourController.js
const { Tour } = require("../models");

// Barcha tur paketlarini olish
exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.findAll();
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// Yangi tur paketi yaratish
exports.createTour = async (req, res) => {
  try {
    const tour = await Tour.create(req.body);
    res.status(201).json(tour);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// Tur paketini yangilash
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: "Tur paketi topilmadi" });
    }
    await tour.update(req.body);
    res.json(tour);
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

// Tur paketini o'chirish
exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ message: "Tur paketi topilmadi" });
    }
    await tour.destroy();
    res.json({ message: "Tur paketi o'chirildi" });
  } catch (error) {
    res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
  }
};

