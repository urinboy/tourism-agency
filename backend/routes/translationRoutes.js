const express = require("express");
const { getTranslations, createTranslation, updateTranslation, deleteTranslation } = require("../controllers/translationController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", getTranslations);
router.post("/", authMiddleware, createTranslation);
router.put("/:id", authMiddleware, updateTranslation);
router.delete("/:id", authMiddleware, deleteTranslation);  // deleteTranslation to'g'ri chaqirilganini tekshiring


module.exports = router;
