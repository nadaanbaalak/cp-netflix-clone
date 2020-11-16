import React, { useState } from "react";
import { useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(requests.fetchNetflixOrignals);
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return null;
    }
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
