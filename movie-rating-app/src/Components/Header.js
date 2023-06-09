import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import user from '../Images/user.png'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../Features/Movies/MovieSlice';
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(term === "") return alert("Please enter a valid search term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }
  return (
    <div>
      <div className='header'>
        <div className='logo'><Link to="/">MovieZ</Link></div>
        <div className='search-bar'><form onSubmit={submitHandler}>
          <input type='text' value={term} placeholder='Search Movies or Shows' onChange={(e) => setTerm(e.target.value)}></input>
          <button type='submit'><i className='fa fa-search'></i></button>
          </form></div>
        <div className='user-image'>
          <img src={user} alt='user' />
        </div>
      </div>
    </div>
  )
}

export default Header