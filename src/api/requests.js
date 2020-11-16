const API_KEY = "5b2abb97369cb9c780d484bbc3a3aa71";

//const fetchTrending = (media_type,duration)=>{}

const requests = {
  fetchTrendingWeek: `/trending/all/week?api_key=${API_KEY}`,
  fetchTrendingDay: `/trending/all/day?api_key=${API_KEY}`,
  fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetcRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
