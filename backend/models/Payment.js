const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Payment = sequelize.define("Payment", {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  bookingId: { type: DataTypes.INTEGER, allowNull: false },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status: { type: DataTypes.ENUM("pending", "completed", "failed"), defaultValue: "pending" },
  transactionId: { type: DataTypes.STRING, unique: true },
});

module.exports = Payment;
