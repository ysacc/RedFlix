import { createSlice } from "@reduxjs/toolkit";

const movieCategorySlice = createSlice({
  name: "Movie Category  ",
  initialState: "Family",
  reducers: {
    setmovieCategory: (state, action) => action.payload,
  },
});

export const { setmovieCategory } = movieCategorySlice.actions;

export default movieCategorySlice.reducer;