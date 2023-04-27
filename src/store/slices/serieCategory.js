import { createSlice } from "@reduxjs/toolkit";

const SerieCategorySlice = createSlice({
  name: "Movie Category  ",
  initialState: "Animation",
  reducers: {
    setSerieCategory: (state, action) => action.payload,
  },
});

export const { setSerieCategory } = SerieCategorySlice.actions;

export default SerieCategorySlice.reducer;