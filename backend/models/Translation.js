const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Translation = sequelize.define("Translation", {
  tourId: { type: DataTypes.INTEGER, allowNull: false },
  languageId: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
});

module.exports = Translation;
