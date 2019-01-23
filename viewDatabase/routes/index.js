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
    let books = [{},{},{}]
    let resident = [{},{},{}]
    res.render('index', { title: 'fatma',authers:data,books:books
  ,resident:resident});
  })
})


module.exports = router;
