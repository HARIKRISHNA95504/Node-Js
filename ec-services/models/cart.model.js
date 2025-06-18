const mongoose = require('mongoose')
const userModel = require('./user.model')
const productModel = require('./product.model')
const cartSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    },
    productId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:productModel
        }
    ]   
})

const cartModel = mongoose.model('carts',cartSchema)
module.exports = cartModel;