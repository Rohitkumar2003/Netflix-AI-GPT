
import Header from './Header'
import {useNowPlayingMovies} from "../hooks/useNowPlayingMovies"
import MainContainer from "../Components/MainContainer"
import SecondContainer from './SecondContainer';
import { usePopularMovies } from '../hooks/usePopularMovies';



  
export const Browse = () => { 

  useNowPlayingMovies();
  usePopularMovies();

  
    return (
      <div >
        <Header/>
        <MainContainer/>  
        <SecondContainer/>
{/*
    -- Main Container -- 
        - video Background
        - Video Title
        
    -- Secondry Container -- 
        - Movie-List*N
            - Cards * N

*/}
      </div>

  )
};

