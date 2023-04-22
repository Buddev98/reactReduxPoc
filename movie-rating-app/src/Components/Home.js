import React, { useEffect } from "react";
import MoviesList from "./MoviesList";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../Features/Movies/MovieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(fetchAsyncMovies());
   dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MoviesList />
    </div>
  );
};

export default Home;
