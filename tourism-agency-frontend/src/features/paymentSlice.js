import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: "payments",
    initialState: { payments: [] },
    reducers: {
        setPayments: (state, action) => {
            state.payments = action.payload;
        }
    }
});

export const { setPayments } = paymentSlice.actions;
export default paymentSlice.reducer;
