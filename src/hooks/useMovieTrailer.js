import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";

export const useMovieTrailer = ({id}) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const json = await data.json();
    // console.log(json);
    const trailerData = json.results.filter((val) => val.type == "Trailer");
    const trailer = trailerData.length ? trailerData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
    // console.log(trailer);
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};
