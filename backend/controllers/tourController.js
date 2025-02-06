const db = require('../database');

exports.getAllTours = (req, res) => {
  db.all('SELECT * FROM tours', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ tours: rows });
  });
};

exports.getTourById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM tours WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ tour: row });
  });
};

// Add more tour-related controller functions as needed