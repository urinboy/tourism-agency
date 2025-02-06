import { createSlice } from '@reduxjs/toolkit';

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    payments: [],
  },
  reducers: {
    setPayments: (state, action) => {
      state.payments = action.payload;
    },
  },
});

export const { setPayments } = paymentSlice.actions;

export default paymentSlice.reducer;