import React, { useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";

export default function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie) {
    setMovies([...movies, movie]);
  }
  
  function removeMovie(index) {
    setMovies(movies.filter((movie, i) => i !== index));
  }

  return (
    <div className="container">
      <h1>My Movie Watchlist</h1>
      <MovieForm addMovie={addMovie} />
      <MovieList movies={movies} removeMovie={removeMovie} />
    </div>
  );
}
