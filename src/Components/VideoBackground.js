import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMoviesTrailer(movieId);
  return (
    <div className="w-screen">

      <iframe 
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/fkjs_kY1F7Q?si=Kxp_m7qgytPIExyZ " + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      
    </div>
  );
};

export default VideoBackground;
