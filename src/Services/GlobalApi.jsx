import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='a8d225842e59d3766ab358c78b2670c0'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos = () => {
    return axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
  };
  
  const getMovieByGenreId = (id) => {
    return axios.get(movieBaseUrl + "/discover/movie?api_key=" + api_key + "&with_genres=" + id);
  };
  
  export default {
    getTrendingVideos,
    getMovieByGenreId
  };