const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');
const tourRoutes = require('./routes/tourRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});