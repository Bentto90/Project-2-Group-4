const express = require('express');
const router = express.Router();

const { getSearchData } = require('../controllers/search.js');

router.get('/', getSearchData);

module.export = router;

// Path: controllers/search.js