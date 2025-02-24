import { Link } from 'react-router-dom';
import '../css/NavBar.css';

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='logo'>Movie App</div>
      <div className='nav-links'>
        <Link to='/'>Movies</Link>
        <Link to='/favorites'>Favorites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
