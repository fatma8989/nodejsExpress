var Product = require ('../../mouduls/product');

var product = [
    new Product ({

    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/518F44bwjOL._AC_UL130_.jpg',
    label: 'iphone',
    description:' mobile',
    price: 120,
    currency:'USD'
    }),


    new Product ({
    imagePath: 'https://www.amazon.com/Apple-iPhone-GSM-Unlocked-16GB/dp/B00YD547Q6/ref=pd_lpo_vtph_107_bs_lp_img_1/135-3934502-9970935?_encoding=UTF8&psc=1&refRID=WT4PFZ3ZZT6F8F71QTE1',
    label: 'iphone',
    description:' mobile',
    price: 500,
    currency:'USD',
    }),

    new Product ({

    imagePath: 'https://www.amazon.com/Apple-iPhone-Unlocked-Certified-Refurbished/dp/B01N9YOF3R',
    label: 'iphone',
    description:' mobile',
    price: 150,
    currency:'USD',
    }),

    new Product({

    imagePath: 'https://images-na.ssl-images-amazon.com/images/I/518F44bwjOL._AC_UL130_.jpg',
    label: 'iphone',
    description:' mobile',
    price: 300,
    currency:'USD'
    }),
];
 
for (i=0 ; i<product.length; i++){
  product[i].save();
}



// module.exports.old = function(fn){
//     Product.find(function(err,data){
//             fn(data)
//     })
// }
module.exports.new = async function(){
    let data = await Product.find()
    return data
}