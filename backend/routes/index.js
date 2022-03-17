var express = require('express');
var router = express.Router();
var path = require('path');

const Board = require('./board');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname,'../public/index.html'))
});


module.exports = router;
