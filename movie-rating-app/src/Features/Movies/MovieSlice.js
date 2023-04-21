import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies : {}
}

const MovieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
});

export const {addMovies} = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default MovieSlice.reducer;