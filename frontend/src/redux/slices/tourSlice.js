import { createSlice } from '@reduxjs/toolkit';

export const tourSlice = createSlice({
  name: 'tour',
  initialState: {
    tours: [],
  },
  reducers: {
    setTours: (state, action) => {
      state.tours = action.payload;
    },
  },
});

export const { setTours } = tourSlice.actions;

export default tourSlice.reducer;