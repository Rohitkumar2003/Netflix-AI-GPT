import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import {addNowPlayingMovies} from "../utils/MovieSlice"

 export const useNowPlayingMovies = () => {

 const dispatch = useDispatch()
  const getNowPlayingMovies = async ()=> {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1', 
        API_OPTION
    )
    const json = await data.json();
    // console.log("json here: ", json.results);
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect( ()=> {
    getNowPlayingMovies();
  },[])

}


  