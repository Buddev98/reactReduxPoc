import React, { useEffect } from 'react'
import MoviesList from './MoviesList'
import MovieApi from '../APIs/MovieApi'
import { APIkey } from '../APIs/MovieApiKey'

const Home = () => {
  useEffect(() => {
    const movieName = "Harry";
    const fetchMovies = async () => {
      const response = await MovieApi.get(`?apiKey=${APIkey}&s=${movieName}&type=movie`).catch((err) => {console.log("Err:", err)});
      console.log("Response: ", response);
    }
    fetchMovies();
  }, [])
  

  return (
    <div>
      <div className='banner-img'></div>
      <MoviesList />
    </div>
  )
}

export default Home