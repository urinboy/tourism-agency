import { createSlice } from "@reduxjs/toolkit";

const tourSlice = createSlice({
    name: "tours",
    initialState: { tours: [] },
    reducers: {
        setTours: (state, action) => {
            state.tours = action.payload;
        }
    }
});

export const { setTours } = tourSlice.actions;
export default tourSlice.reducer;
