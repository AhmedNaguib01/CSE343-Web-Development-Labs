import React from "react";

export default function MovieList(props) {
  return (
    <ul>
      {props.movies.map((movie, index) => (
        <li key={index}>
          <h3>{movie.title}</h3>
          <p>{movie.comment}</p>
          <p>{movie.rating > 0 ? "⭐".repeat(movie.rating) : "No rating"}</p>
          <button onClick={() => props.removeMovie(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

 
