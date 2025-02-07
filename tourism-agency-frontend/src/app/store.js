import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import tourReducer from "../features/tourSlice";
import bookingReducer from "../features/bookingSlice";
import paymentReducer from "../features/paymentSlice";
import translationReducer from "../features/translationSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tours: tourReducer,
        bookings: bookingReducer,
        payments: paymentReducer,
        translations: translationReducer
    },
});
