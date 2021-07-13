import React from "react";
import { actors } from "../data";

const Actors = () => {
  // map over actors
  let actorList = actors.map((actors, i) => (
    <div key={i}>
      <h2>Name: {actors.name}</h2>
      <h4>Movies:</h4>
      <ul>
        {actors.movies.map((movie, i = 0) => (
          <li key={i}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
