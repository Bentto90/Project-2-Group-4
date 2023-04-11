const axios = require('axios');
const data = require('./data.json');

class movieDetail {
    constructor(movieID) {
        this.movieID = movieID;
    }
    async getData() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=${data.key}&language=pl-PL`);
            
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