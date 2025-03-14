import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className='navbar-brand'>
        <Link to='/'>Movie App</Link>
      </div>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
