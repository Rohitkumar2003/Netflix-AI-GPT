import React from 'react';
import MovieList from "./MovieList";
import { useSelector } from 'react-redux';

const SecondContainer = () => {
  const movies = useSelector((store)=>store.movies) 

  return movies.NowPlayingMovies &&(
      <div className=' bg-black '>
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing "} movies={movies.NowPlayingMovies} />
      <MovieList title={"Top Rated "} movies={movies.NowPlayingMovies} />
      <MovieList title={"Popular "} movies={movies.PopularMovies } />
      <MovieList title={"Horror "} movies={movies.NowPlayingMovies} />
      </div>

    </div>
  )
}

export default SecondContainer;