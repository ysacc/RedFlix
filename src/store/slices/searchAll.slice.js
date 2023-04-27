import { createSlice } from "@reduxjs/toolkit";

const searchAllSlice = createSlice({
  name: "search all",
  initialState: "",
  reducers: {
    setSearchAll: (state, action) => action.payload,
  },
});

export const { setSearchAll } = searchAllSlice.actions;
export default searchAllSlice.reducer;