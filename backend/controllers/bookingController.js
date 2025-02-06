const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({ userId: req.user.userId, ...req.body });
    res.status(201).json({ message: "Bron muvaffaqiyatli yaratildi!", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({ where: { userId: req.user.userId } });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    if (req.user.role !== "admin") return res.status(403).json({ message: "Ruxsat etilmagan!" });

    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByPk(id);

    if (!booking) return res.status(404).json({ message: "Bron topilmadi!" });

    await booking.destroy();
    res.json({ message: "Bron bekor qilindi!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
