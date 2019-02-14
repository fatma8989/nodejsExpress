var express = require('express');
var router = express.Router();
var cats = require("cats-js");


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





// unirest.get("https://community-placekitten.p.rapidapi.com/200/300")
// .header("X-RapidAPI-Key", "75c4ef894amsh275ed667a017d9fp15c968jsn8195bd911b7f")
// .end(function (result) {
 
// });



/* GET home page. */
router.get('/', async function(req, res, next) {
  urls = await getCats(100,"gif")
  res.render('index', { title: 'cats' , urls: urls});
});

module.exports = router;
