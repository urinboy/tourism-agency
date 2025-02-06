const dotenv = require("dotenv");

// Muhit o‘zgaruvchilarni yuklash
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  dbStorage: process.env.DB_STORAGE || "database.sqlite",
  jwtSecret: process.env.JWT_SECRET || "defaultsecret",
};
