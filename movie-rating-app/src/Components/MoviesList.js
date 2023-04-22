import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../Features/Movies/MovieSlice";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  let renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="shows-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <React.Fragment>
      <div className="movies-wrapper">
        <div className="movies-list">
          <h2>Movies</h2>
          <div className="movies-container">{renderMovies}</div>
        </div>
      </div>
      <div className="movies-wrapper">
        <div className="shows-list">
          <h2>Shows</h2>
          <div className="movies-container">{renderShows}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MoviesList;
