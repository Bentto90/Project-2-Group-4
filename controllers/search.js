const search = require('../models/searchModels.js');

module.exports = {
    getSearchDetail (req, res) {
        const query = encodeURIComponent(req.query.q);
        mountpath = req.baseURL;
        if (query.length > 2) {
            const searchMovies = async () => {
                search = new Search(query);

                try {
                    await search.getData();
                    return res.render('search', {title: search.title, movies: search, path: mountpath});
                } catch (err) {
                    console.log("Error: " + err);
                }
            }
            searchMovies();
        } else {
            res.redirect('/');
        }
    },
};