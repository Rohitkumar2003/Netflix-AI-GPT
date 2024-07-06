import React from "react"
import { useSelector } from "react-redux"
import VideoTitle from "../Components/VideoTitle"
import VideoBackground from "./VideoBackground"

export const MainConatainer = ()=> {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)

    if(!movies) {
        return null;
    }
    const mainMovie = movies[0];
    

    const { original_title, overview, id } = mainMovie;
        return ( 
            <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id}/>
            </div>
        )
}