const db = require('../database');

exports.getAllBookings = (req, res) => {
  db.all('SELECT * FROM bookings', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ bookings: rows });
  });
};

exports.getBookingById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM bookings WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ booking: row });
  });
};

// Add more booking-related controller functions as needed