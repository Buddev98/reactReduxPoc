import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../Features/Movies/MovieSlice'
import MovieCard from './MovieCard';

const MoviesList = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => {
      return ( 
      <MovieCard key={index} data={movie} />
      )
    })
  ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)
  return (
    <div className='movies-wrapper'>
      <div className='movies-list'>
        <h2>Movies</h2>
        <div className='movies-container'>{renderMovies}</div>
      </div>
    </div>
  )
}

export default MoviesList