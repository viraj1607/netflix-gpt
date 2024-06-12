import React from "react";
import Header from "../components/Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
  );
};

export default Browse;
