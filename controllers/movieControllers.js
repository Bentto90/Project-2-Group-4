const axios = require('axios');
const API_KEY = 'ecc5cf85b814d6c344fc7df8d9448690';

const getTrendingMovies = async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    const movies = response.data.results.slice(0, 20);
    res.render('home', { title: 'Trending Movies', movies });
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Something went wrong' });
  }
};

const getMovieDetails = async (req, res) => {
  const movieId = req.params.id;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    const movie = response.data;
    res.render('movie', { title: movie.title, movie });
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Something went wrong' });
  }
};

module.exports = { getTrendingMovies, getMovieDetails };
