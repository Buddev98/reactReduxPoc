import {configureStore} from "@reduxjs/toolkit";
import MoviesReducer from "./Movies/MovieSlice";

export const store = configureStore({
    reducer: {movies: MoviesReducer},
});