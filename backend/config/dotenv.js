const dotenv = require("dotenv");

// Muhit o‘zgaruvchilarni yuklash
dotenv.config();

module.exports = {
  port: process.env.PORT || 5000,
  dbStorage: process.env.DB_STORAGE || "database.sqlite",
  jwtSecret: process.env.JWT_SECRET || "23b5f039f294ae5d76afaea8a6036c8e4a822d0fff3ab2575c17af194fa087b1ddbab3a38f0e4cfed3561e632121381bd127765aa32b3c504831a066f53503be",
};
