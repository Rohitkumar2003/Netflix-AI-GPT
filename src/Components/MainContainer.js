import React from "react"
import { useSelector } from "react-redux";
import VideoTitle from "../Components/VideoTitle"
import VideoBackground from "./VideoBackground";


const MainContainer=()=> {

    const movies = useSelector((store)=> store.movies?.NowPlayingMovies)
    
    if(!movies) {
        return null
    }
    const mainMovies  = movies[0];
    console.log('Main Movies: ', mainMovies);

    const {original_title, overview,id} = mainMovies;

    return ( 
     
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
        
    )
}

export default MainContainer;