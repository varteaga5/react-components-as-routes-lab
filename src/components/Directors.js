import React from "react";
import { directors } from "../data";

const Directors = () => {
  // map over directors
  let directorList = directors.map((directors, i) => (
    <div key={i}>
      <h2>Name: {directors.name}</h2>
      <h4>Movies:</h4>
      <ul>
        {directors.movies.map((movie, i = 0) => (
          <li key={i}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
};

export default Directors;
