import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_img from '../../assets/profile_img.png'
//import caret_icon from '../../assets/caret_icon.png'

function Navbar() {
  return (
    <div className='navbar'>

      <div className="navbar-left">
        <img className='logo' src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>


      <div className="navbar-right">
        <img className='icons' src={search_icon} alt="search icon" />
          <p>children</p>
        <img className='icons' src={bell_icon} alt="bell icon" />
        <div className="navbar-profile">
          <img  className='profile' src={profile_img} alt="profile" />
        
          <div className="dropdown">
            <p>s</p>
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar