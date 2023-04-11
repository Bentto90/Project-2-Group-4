const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter.js');
const searchRouter = require('./searchRouter.js');
const movieRankRouter = require('./movieRankRouter.js');
const movieDetailRouter = require('./movieDetailRouter.js');

router.use('/', indexRouter);
router.use('/search', searchRouter);
router.use('/movieRank', movieRankRouter);
router.use('/movie/:movieId', function (req, res, next) {
    movieId = req.params.movieId;
    next();
}, movieDetailRouter);

module.exports = router;
