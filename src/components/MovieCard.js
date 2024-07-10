import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({imgPath}) => {
  return (
    <div className="w-44 mr-6">
      <img alt="Movie Card" src={IMG_CDN_URL+imgPath} />
    </div>
  );
};

export default MovieCard;
