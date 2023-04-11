const express = require('express');
const router = express.Router();

const { getMovieRank } = require('../controllers/movieRank.js');

router.get('/', getMovieRank);

module.export = router;

