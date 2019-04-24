var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
});

/* GET users listing. */

router.post('/',function(req,res,next){

  let city = req.body.city // this is the user input

  let key = "&APPID=8c67c721916b4be78c08db4b4356eb7a"

  let url = "https://api.openweathermap.org/data/2.5/weather?q="

  request.post(url+city+key,(err,reqq,body)=>{

    res.send(body)

  })

})
module.exports = router;
