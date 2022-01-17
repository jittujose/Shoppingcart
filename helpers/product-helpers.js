const { resolve, reject } = require('promise')

var db=require('../config/connection')


module.exports={

    addProduct:(product,callback)=>{
        product.Price=parseInt(product.Price);
        console.log(product);

        db.get().collection('product').insertOne(product).then((data)=>{
            console.log(data);
            
            callback(data)
        })
    }
}