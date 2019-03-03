var Product = require ('../../mouduls/product');

// for (i=0 ; i<product.length; i++){
//   product[i].save();
// }



// module.exports.old = function(fn){
//     Product.find(function(err,data){
//             fn(data)
//     })
// }
module.exports.new = async function(){
    let data = await Product.find()
    return data
}