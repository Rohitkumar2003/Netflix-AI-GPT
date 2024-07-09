import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/MovieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=> {

    const dispatch = useDispatch()
  // fetch trailer Video && updating the store with trailer video data 
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    // console.log("json :- ", json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
}
export default useMovieTrailer;