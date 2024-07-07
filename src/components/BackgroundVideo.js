import React from "react";
import { useMovieTrailer } from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const BackgroundVideo = ({ id }) => {
  const movieTrailer = useSelector((store) => store.movie?.movieTrailer);
  useMovieTrailer(id);

  return (
    <div className="w-[100%]">
      <iframe
        className="w-[100%] aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
