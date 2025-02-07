const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const tourRoutes = require("./routes/tourRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const translationRoutes = require("./routes/translationRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/translations", translationRoutes);

app.use(errorHandler);

module.exports = app;
