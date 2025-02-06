const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);

// Add more routes as needed

module.exports = router;