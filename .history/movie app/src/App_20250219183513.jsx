import './App.css';
import Home from './pages/Home';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <>
      <Home />
      <MovieCard movie={{ title: "Tim's film", release_date: '2024' }} />
    </>
  );
}

export default App;
