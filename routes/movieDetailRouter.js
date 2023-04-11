const express = require('express');
const router = express.Router();

const { getMovieDetail } = require('../controllers/movieDetail.js');

router.get('/', getMovieDetail);

module.export = router;

// Path: controllers/movieDetail.js