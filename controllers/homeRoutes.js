const router = require('express').Router();
// renders homepage 
// router.get('/', async (req, res) => {
//     try {
//         const movies = await movies.findALL();
//         res.render('homepage', { movies });
//     } catch (err) {
//         res.status(500).json(err);
//     }
   
// });

router.get('/', async (req, res) => {
    try {
      const trendingMovies = await getTrendingMovies();
      res.render('homepage', { title: 'Trending Movies', movies: trendingMovies });
    } catch (err) {
      res.status(500).json(err);
    }
  });

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