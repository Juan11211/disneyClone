import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = 'a8d225842e59d3766ab358c78b2670c0'

const trendingVideosUrl = `${movieBaseUrl}/trending/all/day?api_key=${api_key}`;
const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;

const getTrendingVideos = async () => {
  try {
    const response = await axios.get(trendingVideosUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching trending videos:', error);
    throw error;
  }
};

const getMovieByGenreId = async (id) => {
  try {
    const response = await axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies by genre:', error);
    throw error;
  }
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};

