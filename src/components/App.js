import React from "react";
import Row from "./row/Row";
import Banner from "./banner/Banner";
import Navbar from "./navbar/Navbar";
import requests from "../api/requests";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Orignals"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />
      <Row title="Trending this Week" fetchUrl={requests.fetchTrendingWeek} />
      <Row title="Trending Today" fetchUrl={requests.fetchTrendingDay} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetcRomanceMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
