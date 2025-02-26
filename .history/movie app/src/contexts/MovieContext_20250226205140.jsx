import { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem('favorites');

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie) => {
    set Favorites(prev=>[...prev, movie]);
  }

  const removeFromFavorites = (movieId) {
    setFavorites(prev=>prev.filter((movie) => 
      movie.id !== movieId));
  }

  const isFavorite = (movieId) => 
    favorites.some((movie) => movie.id === movieId);

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
  
  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};
