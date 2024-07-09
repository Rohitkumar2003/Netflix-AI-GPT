
import Header from './Header'
import {useNowPlayingMovies} from "../hooks/useNowPlayingMovies"
import MainContainer from "../Components/MainContainer"
  
export const Browse = () => { 

  useNowPlayingMovies();
    return (
      <div >
        <Header/>
        <MainContainer/>
        
       
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

