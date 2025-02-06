const express = require("express");
const { getPayments, createPayment, updatePayment, deletePayment } = require("../controllers/paymentController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getPayments);  // getPayments to'g'ri chaqirilganini tekshiring
router.post("/", authMiddleware, createPayment);  // createPayment to'g'ri chaqirilganini tekshiring
router.put("/:id", authMiddleware, updatePayment);  // updatePayment to'g'ri chaqirilganini tekshiring
router.delete("/:id", authMiddleware, deletePayment);  // deletePayment to'g'ri chaqirilganini tekshiring

module.exports = router;
