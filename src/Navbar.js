import React from 'react';
import './styles/Navbar.css';
// Nothing special here
const Navbar = () => {
  return (
    <div className="navbar">
      <a
        href="http://freecodecamp.com"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg"
          id="logo"
          alt="FreeCodeCamp"/>
      </a>
      <span id="linkback"></span>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer" >
        <div><span>Python Curriculum</span> 2017</div>
      </a>
    </div>
  )
}

export default Navbar;
