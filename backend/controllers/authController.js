const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { jwtSecret } = require("../config/dotenv");

exports.register = async (req, res) => {
    try {
        const { full_name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ full_name, email, password: hashedPassword });
        res.status(201).json({ message: "Foydalanuvchi ro‘yxatdan o‘tkazildi!", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Email yoki parol noto‘g‘ri!" });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, jwtSecret, { expiresIn: "1d" });
        res.json({ message: "Tizimga muvaffaqiyatli kirdingiz!", token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.userId, { attributes: { exclude: ["password"] } });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getMe = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id); // Middleware orqali kelgan foydalanuvchini olish
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// exports.getMe = async (req, res) => {
//     try {
//         // Tokenni decode qilish
//         const decoded = jwt.verify(req.token, process.env.JWT_SECRET);  // req.token - bu middleware tomonidan olingan token
//         const user = await User.findByPk(decoded.id);  // Tokenni dekodlash orqali foydalanuvchini topish

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.json(user);  // Foydalanuvchi ma'lumotlarini qaytarish
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

// Foydalanuvchi malumotlarini olish
// exports.getMe = async (req, res) => {
//     try {
//         const user = await User.findByPk(req.user.id);  // req.user.token bilan keltirilgan foydalanuvchi ID
//         if (!user) {
//             return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
//         }
//         res.json(user);
//     } catch (error) {
//         res.status(500).json({ message: "Xatolik yuz berdi", error: error.message });
//     }
// };

// exports.getMe = async (req, res) => {
//     try {
//       // Foydalanuvchi tokenini decode qilish
//       const decoded = jwt.verify(req.token, process.env.JWT_SECRET);
//       const user = await User.findByPk(decoded.id);
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//       res.json(user);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   };