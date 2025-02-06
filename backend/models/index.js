const sequelize = require("../config/database");
const User = require("./User");
const Tour = require("./Tour");
const Booking = require("./Booking");
const Payment = require("./Payment");
const Language = require("./Language");
const Translation = require("./Translation");

// Model aloqalarini o‘rnatish
User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });

Tour.hasMany(Booking, { foreignKey: "tourId" });
Booking.belongsTo(Tour, { foreignKey: "tourId" });

User.hasMany(Payment, { foreignKey: "userId" });
Payment.belongsTo(User, { foreignKey: "userId" });

Booking.hasOne(Payment, { foreignKey: "bookingId" });
Payment.belongsTo(Booking, { foreignKey: "bookingId" });

Language.hasMany(Translation, { foreignKey: "languageId" });
Translation.belongsTo(Language, { foreignKey: "languageId" });

Tour.hasMany(Translation, { foreignKey: "tourId" });
Translation.belongsTo(Tour, { foreignKey: "tourId" });

module.exports = {
  sequelize,
  User,
  Tour,
  Booking,
  Payment,
  Language,
  Translation,
};
