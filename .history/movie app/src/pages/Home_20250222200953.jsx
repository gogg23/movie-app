import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import '../css/Home.css';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const movies = getPopularMovies();

  const handleSearch = (e) => {
    e.preventDefault(e);
    alert(searchQuery);
    setSearchQuery('');
  };

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='search for movies...'
          className='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      <div className='movies-grid'>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
export default Home;
