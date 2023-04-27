import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
  name: "Movie Category  ",
  initialState: 980078,
  reducers: {
    setmovieInfo: (state, action) => action.payload,
  },
});

export const { setmovieInfo } = movieInfoSlice.actions;

export default movieInfoSlice.reducer;