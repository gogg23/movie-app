function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>Movie App</Link>
      </div>
      <div className='navbar-links'>
        <link to='/' className='nav-link'>
          Home
        </link>
        <link to='/favorites' className='nav-link'>
          Favorites
        </link>
      </div>
    </nav>
  );
}
export default NavBar;
