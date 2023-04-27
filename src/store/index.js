import { configureStore } from "@reduxjs/toolkit";
import serieCategory from "./slices/serieCategory";
import searchAll from "./slices/searchAll.slice";
import movieCategory from "./slices/movieCategory";
import movieInfoSlice from "./slices/movieInfo";
import serieInfoSlice from "./slices/serieInfo";
import validMoviesOrSeries from "./slices/validMoviesOrSeries";

export default configureStore({
  reducer: {
    serieCategory,
    searchAll,
    movieCategory,
    movieInfoSlice,
    serieInfoSlice,
    validMoviesOrSeries,
  },
});