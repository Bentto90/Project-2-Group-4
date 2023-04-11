const express = require('express');
const router = express.Router();

const { getIndexData } = require('../controllers/index.js');

router.get('/', getIndexData);

module.export = router;

// Path: controllers/index.js