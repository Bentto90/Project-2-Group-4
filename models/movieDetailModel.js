const axios = require('axios');
const API_KEY = 'ecc5cf85b814d6c344fc7df8d9448690';

class movieDetail {
    constructor(movieID) {
        this.movieID = movieID;
    }
    async getData() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=${API_KEY}&language=pl-PL`);
            
            this.title = response.data.title;
            this.description = response.data.overview;
            this.poster = response.data.poster_path;
            this.backdrop = response.data.backdrop_path;
            this.release_date = response.data.release_date;
            this.genres = response.data.genres;
        } catch (err) {
            console.log("Error: " + err);
        }
    }
};

module.exports = movieDetail;