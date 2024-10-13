import { getMovies } from "@/helpers/movieFunctions";
import React from "react";
import HeroSection from "./components/HeroSection";

const Movies = async () => {
  const movies = await getMovies("now_playing");
  console.log(movies);
  return (
    <div>
      <HeroSection
        id={movies[0].id}
        title={movies[0]?.title}
        overview={movies[0]?.overview}
      />
    </div>
  );
};

export default Movies;
