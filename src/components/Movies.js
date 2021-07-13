import React from "react";
import { movies } from "../data";

const Movies = () => {
  // map over movies array
  let moviesList = movies.map((movie, i) => (
    <div key={i}>
      <h2>Name: {movie.title}</h2>
      <h3>Time: {movie.time}</h3>
      <h4>Genres:</h4>
      <ul>
        {movie.genres.map((genre, i = 0) => (
          <li key={i}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};

export default Movies;
