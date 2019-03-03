var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema = new Schema({
imagePath : {type : String, required:true},
label : { type: String },
price : { type : Number},
currency:{type: String},
description: {type: String}
})
module.exports= mongoose.model('product', schema)


