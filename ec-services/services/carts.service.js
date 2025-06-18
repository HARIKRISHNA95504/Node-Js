const { model } = require('mongoose')
const cartModel = require('../models/cart.model')

const cartService = {
    create:(data)=>{
            const cart = new cartModel(data)
            return cart.save()
    },
    fetchById:(userId)=>{
        return cartModel.findOne({userId})
            .populate('userId','firstName lastName')
            .populate('productId','name imgSrc actualPrice discout inStock')
    },
    update: (id,data)=>{
        return cartModel.findByIdAndUpdate(id,{$set:data},{new:true})
    }

}
module.exports = cartService