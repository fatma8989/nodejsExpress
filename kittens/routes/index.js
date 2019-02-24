var express = require('express');
var router = express.Router();
var cats = require ("cat-js");




async function getcats (n,type){

  let catsurl = []
  var c = new cats();
 

  let catss = await c.get({results_per_page: n, type: type})
  console.log(catss)
  for ( let i of catss.images.image){

  
  catsurl.push[i.url]

}
return catsurl
}

/* GET home page. */
router.get('/', function(req, res, next) {
  urls = getcats(100,"gif")
  res.render('index', { title: 'cats', urls : urls });
});

module.exports = router;
