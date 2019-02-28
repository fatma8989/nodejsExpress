var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var cats = require ("cat-js");
=======
var cats = require("cats-js");
>>>>>>> df6ff6b950041844bfed75011d7dbfe6983efa90


async function getCats(n,type){
  let catsUrls = []
  var c = new cats();
  let catss = await c.get({results_per_page: n, type: type})
  for ( let i of catss.images.image){
    catsUrls.push(i.url)
  }
 // console.log(catss.images.image)
  return catsUrls
}


async function getcats (n,type){

<<<<<<< HEAD
  let catsurl = []
  var c = new cats();
 

  let catss = await c.get({results_per_page: n, type: type})
  console.log(catss)
  for ( let i of catss.images.image){

  
  catsurl.push[i.url]
=======


// unirest.get("https://community-placekitten.p.rapidapi.com/200/300")
// .header("X-RapidAPI-Key", "75c4ef894amsh275ed667a017d9fp15c968jsn8195bd911b7f")
// .end(function (result) {
 
// });

>>>>>>> df6ff6b950041844bfed75011d7dbfe6983efa90

}
return catsurl
}

/* GET home page. */
<<<<<<< HEAD
router.get('/', function(req, res, next) {
  urls = getcats(100,"gif")
  res.render('index', { title: 'cats', urls : urls });
=======
router.get('/', async function(req, res, next) {
  urls = await getCats(100,"gif")
  res.render('index', { title: 'cats' , urls: urls});
>>>>>>> df6ff6b950041844bfed75011d7dbfe6983efa90
});

module.exports = router;
