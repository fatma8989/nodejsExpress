var Product = require ('../../mouduls/product');

// var product = new Product ({

// imagePath: 'https://www.google.com.sa/search?q=images&tbm=isch&source=iu&ictx=1&fir=A6JJqffgz3xzlM%253A%252CpFs_4Fcq5AgpmM%252C_&usg=AI4_-kSe7kutL7fo50LZBJwVxdtPCks5eQ&sa=X&ved=2ahUKEwiF95qxwdzgAhUhgM4BHeJJDc8Q9QEwAXoECAUQBA#imgrc=A6JJqffgz3xzlM:',
// label: 'iphone',
// description:' mobile',
// price: 120,
// currency:'USD'
// });

// product.save()




module.exports.old = function(fn){
    Product.find(function(err,data){
            fn(data)
    })
}
module.exports.new = async function(){
    let data = await Product.find()
    return data
}