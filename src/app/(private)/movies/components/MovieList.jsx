import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
  return (
    <div className="grid grid-flow-col gap-2">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
