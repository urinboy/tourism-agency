import { createSlice } from '@reduxjs/toolkit';

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    reviews: [],
  },
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export const { setReviews } = reviewSlice.actions;

export default reviewSlice.reducer;