const rank = require('../../models/movieRankModel.js');


module.exports = {
    getMovieRank (req, res) {
        const movieRank = async () => {
            let search = new rank(1);

            try {
                await search.getData();
                return res.render('movieRank', {title: search.title, movies: search});
            } catch (err) {
                console.log("Error: " + err);
            }
        }
        movieRank();
    }
};