import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import {addPopularMovies} from "../utils/MovieSlice"

 export const usePopularMovies = () => {

 const dispatch = useDispatch()
  const getPopularMovies = async ()=> {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?page=1', 
        API_OPTION 
    )
    const json = await data.json();
    console.log("json here: ", json.results);
    dispatch(addPopularMovies(json.results));
  }
  useEffect( ()=> {
    getPopularMovies();
  },[])

}


  