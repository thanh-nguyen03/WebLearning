import React from 'react';
import NavBar from './components/NavBar';
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import MoviesContainer from './components/MoviesContainer';

function App() {
  const [showForm, setShowForm] = useState(true);
  const api = {
    key: 'c826af0ab81400a95d4939a62dba2f75',
    base: 'https://api.themoviedb.org/3/',
    image_base: 'https://image.tmdb.org/t/p/original',
  };
  const [movies, setMovies] = useState([]);

  // Fetch Api
  const onSearch = (q) => {
    console.log(q);
    fetch(`${api.base}search/movie?api_key=${api.key}&query=${q}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <NavBar onShowForm={() => setShowForm(!showForm)} />
      {showForm ? <SearchForm onSearch={onSearch} /> : ''}
      <MoviesContainer movies={movies} image_base={api.image_base} />
    </div>
  );
}

export default App;
