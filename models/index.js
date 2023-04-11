const sequelize = require('../config/connection');
const axios = require('axios');
const data = require('../config/data');
const { User} = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
}

seedDatabase();

class Latest {
    constructor(releaseYear, releasedTillNow) {
        this.releaseYear = releaseYear;
        this.releasedTillNow = releasedTillNow;
    }
    async getDate() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${data.key}&language=pl-PL&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&primary_release_year=${this.releaseYear}&primary_release_date.lte=${this.releasedTillNow}&vote_count.gte=8&with_genres=27`);
            this.result = response.data.results;
        } catch (err) {
            console.log("Error: " + err);
        }
    }
};

module.exports = Latest;


