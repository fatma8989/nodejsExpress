var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var shcema = new Schema({



imagePath : {type : String, required:true}

})
module.exports= mongoose.module('product', schema)