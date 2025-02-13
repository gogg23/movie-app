import PropTypes from 'prop-types';

export function MovieCard({ movie }) {
  MovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  };

  function onFavoriteClick() {
    alert('clicked');
  }

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={movie.url} alt={'movie.title'} />
        <div className='movie-overlay'></div>
        <button className='favorite-btn' onClick={onFavoriteClick}>
          ♥
        </button>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
}
