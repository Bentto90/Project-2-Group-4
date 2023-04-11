const axios = require('axios');
const API_KEY = 'ecc5cf85b814d6c344fc7df8d9448690';

class Latest {
    constructor(releaseYear, releasedTillNow) {
        this.releaseYear = releaseYear;
        this.releasedTillNow = releasedTillNow;
    }
    async getDate() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=${this.releaseYear}&primary_release_date.lte=${this.releasedTillNow}&vote_count.gte=8&with_genres=27`);
            this.result = response.data.results;
        } catch (err) {
            console.log("Error: " + err);
        }
    }
};

module.exports = Latest;

