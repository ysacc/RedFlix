import { createSlice } from "@reduxjs/toolkit";

const serieInfoSlice = createSlice({
  name: "Movie Category  ",
  initialState: 456,
  reducers: {
    setserieInfo: (state, action) => action.payload,
  },
});

export const { setserieInfo } = serieInfoSlice.actions;

export default serieInfoSlice.reducer;