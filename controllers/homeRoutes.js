const router = require('express').Router();

// renders homepage 
// router.get('/', async (req, res) => {
//     try { 
//         res.render('homepage', {
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

// // renders about page
// router.get('/about.handlebars', async (req, res) => {
//     try { 
//         res.render('about', {
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

// // renders reviews page
// router.get('/reviews.handlebars', async (req, res) => {
//     try { 
//         res.render('reviews', {
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

// // renders watchlist page
// router.get('/watchlist.handlebars', async (req, res) => {
//     try { 
//         res.render('watchlist', {
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

//  // renders login page and route
// router.get('/login.handlebars', async (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }
//     res.render('login');
// });

// module.exports = router;



// res.render('homepage');
router.get('/', async (req, res) => {
    res.render('homepage')
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