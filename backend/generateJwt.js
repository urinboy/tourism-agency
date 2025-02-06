const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
require("dotenv").config();

// JWT maxfiy kalitini yaratish
const generateJwtSecret = () => {
  const secret = crypto.randomBytes(64).toString("hex"); // 64 baytli tasodifiy kalit
  return secret;
};

// .env faylini o'qish va yangilash
const updateEnvFile = (key, value) => {
  const envPath = path.join(__dirname, ".env");

  // .env faylini o'qish
  const envData = fs.readFileSync(envPath, "utf8");

  // JWT_SECRET mavjud bo'lsa, yangilash
  if (envData.includes(key)) {
    const updatedEnvData = envData.replace(new RegExp(`${key}=[^\n]*`), `${key}=${value}`);
    fs.writeFileSync(envPath, updatedEnvData, "utf8");
  } else {
    // .env faylida mavjud bo'lmasa, qo'shish
    fs.appendFileSync(envPath, `\n${key}=${value}\n`, "utf8");
  }
};

// JWT maxfiy kalitini yaratish
const jwtSecret = generateJwtSecret();

// .env faylini yangilash
updateEnvFile("JWT_SECRET", jwtSecret);

console.log("JWT maxfiy kalit yaratildi va .env faylga yozildi.");
