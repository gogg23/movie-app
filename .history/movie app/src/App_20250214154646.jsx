import './App.css';
import MovieCard from './components/MovieCard';

function App() {
  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "Tim's Film", release_date: '2025' }} />
      ) : (
        <MovieCard movie={{ title: "Joe's Film", release_date: '2020' }} />
      )}
    </>
  );
}

export default App;
