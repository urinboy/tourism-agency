const db = require('../database');

exports.getAllPayments = (req, res) => {
  db.all('SELECT * FROM payments', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ payments: rows });
  });
};

exports.getPaymentById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM payments WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ payment: row });
  });
};

// Add more payment-related controller functions as needed