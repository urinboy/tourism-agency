const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

// Sequelize orqali SQLite bazasini ulash
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: process.env.DB_STORAGE, // .env faylidan bazaning joylashuvini olish
  logging: false, // Konsolda SQL so‘rovlarni chiqarishni o‘chirib qo‘yish
});

// Ma’lumotlar bazasini tekshirish va ulashganini tasdiqlash
sequelize
  .authenticate()
  .then(() => console.log("✅ Ma’lumotlar bazasi muvaffaqiyatli ulandi!"))
  .catch((err) => console.error("❌ Ma’lumotlar bazasiga ulanishda xatolik:", err));

module.exports = sequelize;
