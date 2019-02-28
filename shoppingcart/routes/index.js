var express = require('express');
var router = express.Router();
var prod = require ('./seed/productseed')

/* GET home page. */
router.get('/', async function(req, res, next) {


  //prod.old(function(data){
   // console.log(data)
  //})


 // console.log(await prod.new())
  res.render('index', { title: 'shopping cart', data : await prod.new() });
});

module.exports = router;
