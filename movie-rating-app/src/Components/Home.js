import React, { useEffect } from "react";
import MoviesList from "./MoviesList";
import MovieApi from "../APIs/MovieApi";
import { APIkey } from "../APIs/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../Features/Movies/MovieSlice";

const Home = () => {
  const movieName = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIkey}&s=${movieName}&type=movie`
      ).catch((err) => {
        console.log("Err:", err);
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MoviesList />
    </div>
  );
};

export default Home;
