const router = require('express').Router();

// renders homepage 
router.get('/', async (req, res) => {
    res.render('homepage');
});

module.exports = router;