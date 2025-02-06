const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/dotenv");

module.exports = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token mavjud emas!" });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Yaroqsiz token!" });
  }
};
