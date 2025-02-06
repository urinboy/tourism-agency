const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

router.get('/', tourController.getAllTours);
router.get('/:id', tourController.getTourById);

// Add more routes as needed

module.exports = router;