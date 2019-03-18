var express = require('express');
var router = express.Router();
var request = require('request')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mynotes', { title: 'mynotes',buttons:[{title:"register",url:"/register/"}, ]  });
});

router.post('/',function(req,res,next){
  
 
  request.post('http://www.localhost:3001/api/Users/login', {form:{username:req.body.user,password:req.body.pass}},(err,req,body)=>{
  let result = JSON.parse(body)
  let keys = Object.keys(result)
  if (keys.indexOf("error")== -1){
    res.redirect("/mynotes")

  }else {
    res.redirect("/")
    
  }


})
  // request to http://localhost:3000/API/Users/login  with json {email:"",password:""}
  // let sucsses = null
  // if(req.body.user == 'test' && req.body.pass == 'test'){
  //     sucsses = true
  // }else{
  //   sucsses = false
  // }
  // if(sucsses){
  //   res.redirect("/mynotes")
  // }else{
  //   res.redirect("/")
  // }
})


module.exports = router;