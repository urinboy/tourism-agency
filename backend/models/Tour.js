const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Tour = sequelize.define("Tour", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  duration: { type: DataTypes.INTEGER, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING },
});

module.exports = Tour;
