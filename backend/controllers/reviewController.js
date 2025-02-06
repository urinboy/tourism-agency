const db = require('../database');

exports.getAllReviews = (req, res) => {
  db.all('SELECT * FROM reviews', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ reviews: rows });
  });
};

exports.getReviewById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM reviews WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ review: row });
  });
};

// Add more review-related controller functions as needed