const router = require('express').Router();

const userRoutes = require('../../userRoutes');

router.use('/users', userRoutes);

module.exports = router;










// const router = require('express').Router();

// const homeRoutes = require('../homeRoutes');

// router.use('/', homeRoutes);

// module.exports = router;

