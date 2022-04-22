var express = require('express');
var router = express.Router();
const movieCtrl = require('../controllers/movies')

// if user visits this route fire controller
router.get('/new', movieCtrl.new)

module.exports = router;
