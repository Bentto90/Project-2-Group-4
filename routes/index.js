const express = require('express');
const router = express.Router();
const movieController = require('../controllers/index.js');

router.get('/', movieController.getTrendingMovies);
router.get('/movie/:id', movieController.getMovieDetails);

module.exports = router;