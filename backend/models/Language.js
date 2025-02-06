const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Language = sequelize.define("Language", {
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  code: { type: DataTypes.STRING, allowNull: false, unique: true },
});

module.exports = Language;
