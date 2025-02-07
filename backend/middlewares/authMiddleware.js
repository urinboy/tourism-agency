const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]; // "Bearer <token>" dan faqat token qismini ajratib olish

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Token ochilganidan keyin foydalanuvchi ma'lumotini req.user ga yuklaymiz
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;


// const jwt = require('jsonwebtoken');

// const authMiddleware = (req, res, next) => {
//   const token = req.headers['authorization']?.split(' ')[1];  // Bearer tokenni ajratib olish

//   if (!token) {
//     return res.status(403).json({ message: 'No token provided' });  // Agar token bo'lmasa, xatolik qaytaramiz
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Tokenni tekshiramiz
//     req.user = decoded;  // Agar token to'g'ri bo'lsa, foydalanuvchi ma'lumotlarini req.user ga saqlaymiz
//     next();  // Keyingi middleware yoki controllerga o'tamiz
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid token' });  // Agar token noto'g'ri bo'lsa, xatolik qaytaramiz
//   }
// };

// module.exports = authMiddleware;


// const authMiddleware = (req, res, next) => {
//   const token = req.headers['authorization']?.split(' ')[1];
  
//   if (!token) {
//     return res.status(403).json({ message: 'Yaroqsiz token!' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;  // Tokenni decoding qilib req.user ga saqlaymiz
//     next();  // Requestni keyingi middleware yoki controllerga yuboramiz
//   } catch (error) {
//     res.status(401).json({ message: 'Token mavjud emas!' });
//   }
// };

// module.exports = authMiddleware;


// const jwt = require("jsonwebtoken");
// const { jwtSecret } = require("../config/dotenv");

// module.exports = (req, res, next) => {
//   const token = req.header("Authorization")?.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ message: "Token mavjud emas!" });
//   }

//   try {
//     const decoded = jwt.verify(token, jwtSecret);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(403).json({ message: "Yaroqsiz token!" });
//   }
// };
