const axios = require('axios');
const data = require('../config/data');

class Search {
    constructor (searchQuery) {
        this.searchQuery = searchQuery;
    }
    async getData() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${data.key}&language=pl-PL&query=${this.query}&page=1`);

            const resData = response.data.results;

            this.results = resData.filter(resData => resData.genre_ids.some(id => id === 27));
        } catch (err) {
            console.log("Error: " + err);
        }
    }
}

module.exports = Search;