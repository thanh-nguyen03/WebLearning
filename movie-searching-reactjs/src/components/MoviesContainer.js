import React from 'react';
import MovieCard from './MovieCard';

const MoviesContainer = ({ movies, image_base }) => {
  return (
    <div className="movies-wrapper">
      <div className="movies-container">
        {movies
          ? movies.map((movie) => (
              <MovieCard movie={movie} image_base={image_base} />
            ))
          : ''}
      </div>
    </div>
  );
};

export default MoviesContainer;
