var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res,next){


 post.request ('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',{form:{city:city.val}},(err,reqq,body)=>{

    console.log(city.val)
    if (reqq.statusCode == 200){
        res.render('weatherapi' , {title: 'weather', data:body});
        
      }else {
        res.redirect("/")
        
      }
})

})
module.exports = router;
