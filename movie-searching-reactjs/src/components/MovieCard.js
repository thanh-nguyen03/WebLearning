import React from 'react';

const MovieCard = ({ movie, image_base }) => {
  return (
    <div className="movie-card">
      <img
        src={`${image_base}${movie.poster_path}`}
        className="movie-title-image"
      />
      <h6 className="movie-title">
        <a>{movie.original_title}</a>
      </h6>
      <p className="movie-rating">
        <i className="fab fa-imdb"></i>
        {movie.vote_average}
      </p>
    </div>
  );
};

export default MovieCard;
