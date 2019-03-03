var Product = require ('../../mouduls/product');
module.exports.old = function(fn){
    Product.find(function(err,data){
            fn(data)
    })
}
module.exports.new = async function(){
    let data = await Product.find()
    return data
}