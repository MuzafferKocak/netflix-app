import React from "react";
import MovieList from "./MovieList";
import { getMovies } from "@/helpers/movieFunctions";

const MovieSection = async ({ title, type }) => {
  const movies = await getMovies(type);
  return (
    <div className="mb-4">
      <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
        {title}
      </p>
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieSection;
