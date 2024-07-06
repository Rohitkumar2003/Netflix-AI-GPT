import { API_OPTION } from '../utils/constants'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'


export const useNowPlayingMovies = ()=> {
      // Fetch data from TMDB API and update Store
  const dispatch = useDispatch()
  const getNowPlayingMovies = async ()=> {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?page=1',
           API_OPTION
          );
          const json = await data.json();
        
          dispatch(addNowPlayingMovies(json.results));
  }
  useEffect( ()=>  {
    getNowPlayingMovies();
  },[])

}