const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define("Booking", {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  tourId: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.ENUM("pending", "confirmed", "cancelled"), defaultValue: "pending" },
  date: { type: DataTypes.DATE, allowNull: false },
  guests: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Booking;
