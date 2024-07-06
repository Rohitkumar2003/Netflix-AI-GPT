import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import { MainConatainer } from './MainContainer'
import { SecondryConatainer } from './SecondryContainer'
 
export const Browse = () => { 
   useNowPlayingMovies()
    return (
      
      <div >
        <Header/>
        <MainConatainer/> 
        <SecondryConatainer/>
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
}
