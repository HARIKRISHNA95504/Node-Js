const { response, request } = require('express');
const reviewService = require('../services/reviews.service')

const reviewCtrl ={
    create:async(request,response)=>{
        try{
            const review = await reviewService.create(request.body)
            response.status(201)
            response.send({
                message:'crated Review Successfully',
                data:review
            })

        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                error:'unable to create the Review'
            })
        }
    }
    
}

module.exports = reviewCtrl;