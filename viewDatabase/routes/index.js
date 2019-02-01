var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fatma', {useNewUrlParser: true});

var autherSchema = new mongoose.Schema({
  name: String,
  mobile:Number,
  email:String
});
var auther  = mongoose.model('authers', autherSchema);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Hello World")

});

router.get("/fatma",(req,res,next)=>{
  auther.find({},function(err,records){
    let data = []
    for(i of records){
      data.push({name:i.name,mobile:i.mobile,email:i.email})
    }
    books.find({},function(err,records){
      let books = [{},{},{}]
      for(i of records){
        data.push(i)
      }
      
     resident.find({},function(err,records){
        let resident = [{},{},{}]
        for(i of records){
          resident.push(i)
        }
    
    
    res.render('index', { title: 'fatma',authers:data,books:books
  ,resident:resident});
  })
})


router.get("/fatma",(req,res,next)=>{
  books.find({},function(err,records){
    let data = []
    for(i of records){
      data.push(i)
    }
    let books = [{},{},{}]
    let resident = [{},{},{}]
    res.render('index', { title: 'fatma',authers:data,books:books
  ,resident:resident});


module.exports = router;
