import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants';

const MovieCard = ({PosterPath} ) => {
  return (
    <div className='w-48 pr-4'>

    <img alt="MoviesCard"
      src={IMAGE_CDN_URL + PosterPath}
    />

    </div>
  )
}

export default MovieCard;