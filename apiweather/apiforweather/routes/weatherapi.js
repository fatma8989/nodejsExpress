var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
 router.get('/', function(req, res, next) {

//   const options = {
//     method: "GET" , 
//     url: 'https://samples.openweathermap.org/data/2.5/weather/8c67c721916b4be78c08db4b4356eb7a',
//     json:true

//   }



res.render('weatherapi' , {title: 'weather'});


}) 
module.exports = router;