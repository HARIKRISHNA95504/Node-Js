const express = require('express')
const sellerModel= require('../models/seller.model')

const sellerCtrl ={
    create: async (request,response)=>{
        const seller = new sellerModel(request.body)
        try{
            const savedSeller = await seller.save()
            response.status(201).send({
                message:'inserted seller successfully',
                data:savedSeller
            })
        }catch(error){
            console.log(error)
            response.status(500).send({
                error:'unable to insert seller'
            })
        }
    },
    getAll:async(request,response) =>{
        try{
            const sellers = await sellerModel.find()
            response.status(200).send({
                message:'sellers retrieve successfully',
                data:sellers
            })

        }catch(error){
            response.status(500).send({
                error:'unable to retrieve the sellers'
            })
        }
    },
    getById: async(request,response)=>{
        try{
            const seller = await sellerModel.findById(request.params.id)
            if(seller){
                response.status(200).send({
                message:'retrieve seller successfully!!',
                data:seller
            })}else{
                response.status(404).send({
                    message:'seller not found',
                })
            }

        }catch(error){
            response.status(500).send({
                error:'unable to retrive seller'
            })
        }
    },
    update: async(request,response) =>{
        const sellerId = request.params.id
        try{
            const savedSeller  = await sellerModel.findByIdAndUpdate(sellerId,{$set:request.body},{new:true})
            response.status(200).send({
                message:'update seller succcessfully',
                data:savedSeller
            })

        }catch(error){
            response.status(500).send({
                error:'unable to update seller'
            })
        }
    },
    delete: async(request,response) =>{
        const sellerId = request.params.id
        try{
            await sellerModel.findByIdAndDelete(sellerId)
            response.status(200).send({
                message:'successfully deleted seller',
            })

        }catch(error){
            response.status(500).send({
                error:'unable to delete the seller!!'
            })
        }
    },
    patch: async(request,response) =>{
        try{
            const sellerId = request.params.id
            const seller = await sellerModel.findById(sellerId)
            for(let key in request.body){
                seller[key]=request.body[key]
            }

            const sellerUpdate = await sellerModel.findByIdAndUpdate(sellerId,{$set:seller},{new:true})
            response.status(200).send({
                message:'successfully updated the seller fields',
                data:sellerUpdate
            })
            
        }catch(error){
            response.status(500).send({
                error:'unable to updated the seller fields!!'
            })
        }
    }
}

module.exports = sellerCtrl;