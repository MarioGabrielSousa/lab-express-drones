const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title: 'Drones! Or what the kids call them days... "drnz"!' }));

module.exports = router;
