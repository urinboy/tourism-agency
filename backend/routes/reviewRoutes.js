const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/', reviewController.getAllReviews);
router.get('/:id', reviewController.getReviewById);

// Add more routes as needed

module.exports = router;