import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-12 py-6">
      <h2 className="font-bold text-3xl mb-4 text-white">{title}</h2>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((mov) => {
              return <MovieCard imgPath={mov && mov.poster_path} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
