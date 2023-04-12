const router = require('express').Router();
const Search = require('../models/searchModel.js');

router.get('/search', async (req, res) => {
    try {
        const searchQuery = req.query.searchQuery;
        const search = new Search(searchQuery);
        await search.getData();
        return res.render('searchResults', {searchQuery, searchResults: search.results});
    } catch (err) {
        console.log("Error: " + err);
        return res.status(500).send("Error searching movies");
    }
});

module.exports = router;