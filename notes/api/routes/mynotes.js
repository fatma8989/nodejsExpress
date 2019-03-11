var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mynotes', { title: 'mynotes',buttons:[{title:"register",url:"/register/"}, {title:"mynotes",url:"/mynotes"} ]  });
});


module.exports = router;