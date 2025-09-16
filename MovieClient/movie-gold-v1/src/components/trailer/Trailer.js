import React from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./Trailer.css";

const Trailer = () => {
  let params = useParams();
  const key = params.ytTrailerId;

  return (
    <div className="react-player-container">
      {key ? (
        <YouTube
          className="react-player"
          videoId={key}
          opts={{
            width: "100%",
            height: "100%",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
        />
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
};

export default Trailer;
