import React from 'react'
import { Link } from 'react-router-dom'
import user from '../Images/user.png'
const Header = () => {
  return (
    <div>
      <div className='header'>
        <Link to="/"><div className='logo'>MovieZ</div></Link>
        <div className='user-image'>
          <img src={user} alt='user' />
        </div>
      </div>
    </div>
  )
}

export default Header