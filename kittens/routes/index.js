var express = require('express');
var router = express.Router();
var unirest = require('unirest')





unirest.get("https://community-placekitten.p.rapidapi.com/200/300")
.header("X-RapidAPI-Key", "75c4ef894amsh275ed667a017d9fp15c968jsn8195bd911b7f")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
