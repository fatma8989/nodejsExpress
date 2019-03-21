var express = require('express');
var router = express.Router();
var request = require('request')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Error 404")
  // console.log(req.body)
  // res.render('mynotes', { title: 'mynotes',buttons:[{title:"register",url:"/register/"}, ]  });
}); 

router.post('/',function(req,res,next){
  
 
  request.post('http://www.localhost:3001/api/Users/login', {form:{username:req.body.user,password:req.body.pass}},(err,reqq,body)=>{
  let result = JSON.parse(body)
  result["user"]= req.body.user
  
  if (reqq.statusCode == 200){
    res.render('mynotes', { user:result,title: 'mynotes',buttons:[]  });
    // res.redirect("/mynotes")

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