import React from "react";
import BackgroundVideo from "./BackgroundVideo";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  if (!movies) return null;
  console.log(movies);
  const mainMovie = movies.length && movies[0];

  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <BackgroundVideo id={id} />
    </div>
  );
};

export default MainContainer;
