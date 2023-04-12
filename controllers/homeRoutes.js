const router = require('express').Router();
const movieController = require('./api/movieControllers');

// renders homepage
// router.get('/', async (req, res) => {
//     res.render('homepage');
// });

router.get('/', movieController.getTrendingMovies);

// renders about page
router.get('/about.handlebars', async (req, res) => {
    res.render('about');
});

// renders login page
router.get('/login.handlebars', async (req, res) => {
    res.render('login');
});
// renders reviews page
router.get('/reviews.handlebars', async (req, res) => {
    res.render('reviews');
});
// renders watchlist page
router.get('/watchlist.handlebars', async (req, res) => {
    res.render('watchlist');
});
module.exports = router;