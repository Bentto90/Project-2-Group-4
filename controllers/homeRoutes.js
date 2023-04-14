const router = require('express').Router();
const movieController = require('./movieRoutes');
const { User } = require('../models');
const Watchlist = require("../models/Watchlist")

const withAuth = require('../utils/auth');
router.get('/movie/:id', movieController.getMovieDetails);
router.get('/search/', movieController.getSearchResults);
const axios = require('axios');
const API_KEY = 'ecc5cf85b814d6c344fc7df8d9448690';
// checks if user is authorizes

//nothing here
router.get('/', withAuth, async (req, res) => {

    console.log("check this", req.session, req.session.user_id)
    try {
        // const userData = await User.findAll({
        //     attributes: { exclude: ['password'] },
        //     order: [['name', 'ASC']],
        // });

        // const users = userData.map((project) => project.get({ plain: true }));
        // console.log("check this",users, req.session, req.session.user_id)

        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=vote_average.desc`);
        const movies = response.data.results.filter(movie => movie.poster_path !== null).slice(0, 20);

        res.render('homepage', {
            title: 'Top Rated Horror Movies', movies,
            user_id: req.session.user_id,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
    
        res.redirect('/');
        return;
    }
    res.render('login');
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
    console.log("are you getting here?")
        //get  movie list
        //console.log("is the user in here?",req.session,  req.session.user_id)


      try {
        const watchData = await Watchlist.findAll({
           where: {user_id: req.session.user_id}
           
        });

        console.log("what is my watch list?", watchData)
        const w = watchData.map((project) => project.get({ plain: true }));
        console.log("w?",w)

        res.render('watchlist', {
            movies:  w,
            user_id:  req.session.user_id
        });
  
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }




 
});
module.exports = router;