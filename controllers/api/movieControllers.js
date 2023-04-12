const axios = require('axios');
const API_KEY = 'ecc5cf85b814d6c344fc7df8d9448690';

// const getTrendingMovies = async (req, res) => {
//   try {
//     const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=vote_average.desc`);
//     const movies = response.data.results.slice(0, 20);
//     res.render('homepqage', { title: 'Top Rated Horror Movies', movies });
//   } catch (error) {
//     console.error(error);
//     res.render('error', { message: 'Something went wrong' });
//   }
// };
const getTrendingMovies = async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=vote_average.desc`);
    const movies = response.data.results.slice(0, 20);
    res.render('homepage', { title: 'Top Rated Horror Movies', movies });
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Something went wrong' });
  }
};

const getMovieDetails = async (req, res) => {
  const movieId = req.params.id;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&with_genres=27&sort_by=vote_average.desc`);
    const movie = response.data;
    res.render('movie', { title: movie.title, movie });
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Something went wrong' });
  }
};

const getSearchResults = async (req, res) => {
  const searchQuery = req.query.q;
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1`);
    const movies = response.data.results;
    res.render('searchResult', { title: 'Search Results', movies });
  } catch (error) {
    console.error(error);
    res.render('error', { message: 'Something went wrong' });
  }}

module.exports = { getTrendingMovies, getMovieDetails, getSearchResults };
