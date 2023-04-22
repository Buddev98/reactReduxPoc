import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../APIs/MovieApi";
import { APIkey } from "../../APIs/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieName = "Harry";
    const response = await MovieApi.get(
      `?apiKey=${APIkey}&s=${movieName}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async () => {
      const seriesName = "friends";
      const response = await MovieApi.get(
        `?apiKey=${APIkey}&s=${seriesName}&type=series`
      );
      return response.data;
    }
  );

  export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
      const response = await MovieApi.get(
        `?apiKey=${APIkey}&i=${id}&Plot=full`
      );
      return response.data;
    }
  );

const initialState = {
  movies: {},
  shows: {},
  selectMoveOrShow: {},
};

const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
        console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
        console.log("fetched successfully");
        return {...state, movies: payload}
    },
    [fetchAsyncMovies.rejected]: () => {
        console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, {payload}) => {
        console.log("fetched successfully");
        return {...state, shows: payload}
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
      console.log("fetched successfully");
      return {...state, selectMoveOrShow: payload}
  },
  }
});

export const { addMovies } = MovieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMoveOrShow;
export default MovieSlice.reducer;
