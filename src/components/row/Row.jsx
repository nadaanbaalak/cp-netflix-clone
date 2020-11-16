import React, { useState, useEffect } from "react";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "../../api/axios";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const baseURL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //console.log(request);
      setMovies(request.data.results);
      return null;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);
  const handleClick = (movie) => {
    if (videoUrl) {
      setVideoUrl("");
    } else {
      console.log(movie);
      console.log(movie?.name || movie?.original_name || movie?.original_title);
      movieTrailer(
        movie?.name || movie?.original_name || movie?.original_title || ""
      )
        .then((url) => {
          const urlParam = new URLSearchParams(new URL(url).search);
          setVideoUrl(urlParam.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  const opts = {
    height: "500px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {videoUrl && <Youtube videoId={videoUrl} opts={opts} />}
    </div>
  );
};

export default Row;
