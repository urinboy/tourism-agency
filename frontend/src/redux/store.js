import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import tourReducer from './slices/tourSlice';
import bookingReducer from './slices/bookingSlice';
import paymentReducer from './slices/paymentSlice';
import reviewReducer from './slices/reviewSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    tour: tourReducer,
    booking: bookingReducer,
    payment: paymentReducer,
    review: reviewReducer,
  },
});