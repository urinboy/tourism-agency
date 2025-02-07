import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name: "bookings",
    initialState: { bookings: [] },
    reducers: {
        setBookings: (state, action) => {
            state.bookings = action.payload;
        }
    }
});

export const { setBookings } = bookingSlice.actions;
export default bookingSlice.reducer;
