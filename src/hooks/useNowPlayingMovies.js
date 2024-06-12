import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSlice";
import { options } from "../utils/constants";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    

    const data=await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    )
      const json=await data.json();
      console.log(json.results)
      dispatch(addNowPlayingMovie(json.results))
  };

  useEffect(() => {
    getNowPlayingMovies();
  });
};
