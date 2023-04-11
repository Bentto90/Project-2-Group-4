const latest = require('../models/movieIndexModel.js');

const movies = {};
let dateObj = new Date();
let releaseYear = dateObj
    .getFullYear()
    .toString();

function getMonth(date) {
    // getting month from date object in 2 digits format
    let month = (date.getMonth() + 1);
    return month < 10 ? '0' + month : '' + month;
}

function getDay(date) {
    // getting day from date object in 2 digits format
    let day = date.getDate();
    return day < 10 ? '0' + day : '' + day;
}

let releasedTillNow = 
    dateObj.getFullYear() + '-' + getMonth(dateObj) + '-' + getDay(dateObj);

const latestMovies = async (req, res) => {
    let search = new latest(releaseYear, releasedTillNow);
    try {
        await search.getDate();
        movies.result = search.result;
    } catch (err) {
        console.log("Error: " + err);
    }
};
latestMovies();

module.exports = {
    getIndexData(req, res) {
        return res.render("index", movies)
    }
};
