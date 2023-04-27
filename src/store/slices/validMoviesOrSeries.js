import { createSlice } from "@reduxjs/toolkit";

const validMoviesOrSeriesSlice = createSlice({
  name: "Movie Category  ",
  initialState: "movie",
  reducers: {
    setvalidMoviesOrSeries: (state, action) => action.payload,
  },
});

export const { setvalidMoviesOrSeries } = validMoviesOrSeriesSlice.actions;

export default validMoviesOrSeriesSlice.reducer;