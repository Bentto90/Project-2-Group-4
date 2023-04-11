const router = require('express').Router();
const movieDetail = require('../models/movieDetailModel.js');

module.export = {

    getMovieDetail(req, res) {
        const getMovieDetail = async() => {

            let movie = new movieDetail(movieID);
            try {
                await movie.getData();
                return res.render('movieDetail', {title: movie.title, movie: movie});
            } catch (err) {
                console.log("Error: " + err);
            }
        }
        getMovieDetail();

    },
};

module.exports = router;