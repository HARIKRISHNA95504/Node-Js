const { request, response } = require('express');
const cartService = require('../services/carts.service');
const cartModel = require('../models/cart.model');
const { update } = require('./products.ctrls');

const cartsCtrl = {
    create : async(request,response)=>{
        try{
            const createdCart = await cartService.create(request.body);

            response.status(201)
            response.send({
                data:createdCart,
                message:' Created Cart successfully'
            })
        }catch(error){
            response.status(500)
            response.send({
                error:'unable to Create Cart'
            })
        }
    },
    fetchByUserId: async(request,response)=>{
        try{
            const cartInfo = await cartService.fetchById(request.params.userId);
            response.status(200)
            console.log(cartInfo)
            response.send({
                // data:cartInfo,
                data:{userInfo:cartInfo.userId, productsInfo:cartInfo.productId,_id : cartInfo._id}, //we can also change the variable names
                message:'Retrieve cart Successfully'
            })

        }catch(error){
            response.status(500)
            console.log(error)
            response.send({
                error:'unable to Retrive Cart'
            }) 
        }
    },
    update:async(request,response)=>{
        try{
            const updatedCart = await cartService.update(request.params.id,request.body)
            response.status(200)
            response.send({
                data:updatedCart,
                // data:{userInfo:cartInfo.userId, productsInfo:cartInfo.productId}, we can also change the variable names
                message:'Update cart Successfully'
            })

        }catch(error){
            response.status(500)
            response.send({
                error:'unable to Update Cart'
            }) 
        }
    }

}


module.exports = cartsCtrl