const axios = require('axios');
const data = require('../config/data');

class rank {
    constructor(page) {
        this.page = page;
    }
    async getData() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${data.key}&language=pl-PL&sort_by=vote_average.desc&include_adult=false&include_video=false&page=${this.page}&vote_count.gte=200&with_genres=27`);
            this.results = response.data.results;
            this.total_pages = response.data.total_pages;
            this.total_results = response.data.total_results;
        } catch (err) {
            console.log("Error: " + err);
        }
    }
}

module.exports = rank;