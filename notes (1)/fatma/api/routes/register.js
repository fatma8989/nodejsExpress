var express = require('express');
var router = express.Router();
var request = require('request')
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('register', { title: 'register' ,buttons:[ {title:"mynotes",url:"/mynotes"} ] });
});



router.post('/',function(req,res,next){ // i recived dat afrom register form

//   request.post('http://www.localhost:3001/api/Users', {form:{username:req.body.user, email:req.body.email,password:req.body.pass}},(err,req,body)=>{
//   let result = JSON.parse(body)
//   console.log(result)
  


// })

 
  // console.log(req.body)
  // let success = null
if (req.body.pass == req.body.confirm){

  request.post('http://www.localhost:3001/api/Users', {form:{username:req.body.user, email:req.body.email,password:req.body.pass}},(err,req,body)=>{
  console.log(req.statusCode)
  if(req.statusCode == 200){
    res.redirect('/')
  }else{
    res.redirect('/register')
  }
  let result = JSON.parse(body)
  // console.log(result)
  


})
//  res.redirect('/')
}else{
  res.redirect('/register')
}

  // res.send(success)


});


module.exports = router;