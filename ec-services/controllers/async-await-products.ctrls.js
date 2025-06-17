const { response, request } = require("express");
const productsModal = require('../models/product.model');
const reviewService = require("../services/reviews.service");

const productsCtrl={
    // is the code is ASYNC AND AWAIT
    getAll: async(request,response)=>{
        try{
          const products = await productsModal.find()
            response.status(200)
            response.send({
                message:'retrive products successfully',
                data:products
            })
        }catch(error){
            response.status(501)
                response.send({
                    message:'unable to retrive the products',
                    error:error
                })
        }
    },

    getById: async(request,response)=>{
            const productId = request.params.id
        try{
            const product = await productsModal.findById(productId);
            if(product){
                // generate the image URL
                product.imgSrc = request.protocol + '://' +  request.get('host')+'/'+product.imgSrc
                
                const reviews = await reviewService.getByProductId(productId)
                const avgRatingResponse = await reviewService.getAvgRating(productId)
                const ratingsCountResponse = await reviewService.getRatingCount(productId)
                console.log(ratingsCountResponse)
                response.status(200)
                response.send({
                message:'retrive product successfully',
                data:{...product._doc,reviews, avgRating:avgRatingResponse && avgRatingResponse[0].averageRating? parseFloat(avgRatingResponse[0].averageRating).toFixed(1):0,ratingsCount:ratingsCountResponse}
                })
            }else{
                response.status(404)
                response.send({
                message:' product not found',
                })
            }
         }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrive the product',
                error:error
            })
        }

    },



    // to delete a product
    // using async and await
    delete: async(request,response)=>{
        const productId = request.params.id;
        try{
            await productsModal.findByIdAndDelete(productId)
            response.status(200)
            response.send({
                message:'Deleted product successfully'
            })
        }catch(error){
            response.status(500)
            response.send({
                message:'product does not exist'
            })
        }
    },

    // to create product using ASYNC AND AWAIT

    create: async(request,response)=>{
        const product = new productsModal(request.body)
        try{
            const savedProduct = await product.save();
            response.status(200)
            response.send({
                message:"inserted product successfully",
                data:savedProduct
            })
        }catch(error){
             response.status(500)
                response.send({
                    message:'unable to save the product',
                    error:error
                })

        }
    },
    update:async(request,response)=>{
        const productId = request.params.id
        try{
            const savedProduct = await productsModal.findByIdAndUpdate(productId,{$set:request.body},{new:true})
            // const savedProduct = await productsModal.findByIdAndUpdate(request.params.id,{$set:request.body},{new:true})

            response.status(200)
                 response.send({
                    message:'Updated product successfully',
                    data: savedProduct
                    })
        }catch(error){
             response.status(500)
                response.send({
                    message:'unable to Update the product',
                    error:error
                })
                

        } 
        // {new : true} it returns the lastest updates of product
        
       
    },
    patch:async(request,response)=>{
        try{
            const productId = request.params.id
            const product = await productsModal.findById(productId)
            for(let key in request.body){
                    product[key]=request.body[key];
            }

            const savedProduct = await productsModal.findByIdAndUpdate(productId,{$set:product},{new:true})

            response.status(200)
            response.send({
                message:'updated product succesfully',
                data:savedProduct
            })


        }catch(error){
            response.status(500)
            response.send({
                message:'unable to update the product'
            })
        }
    },

    // file upload API

    uploadImage: async(request,response)=>{
       try{
            const productId = request.body.productId
            const product = await productsModal.findById(productId)

            product['imgSrc']= request.body.filename
            const savedProduct = await productsModal.findByIdAndUpdate(productId,{$set:product},{new:true})
            console.log(savedProduct)
            response.status(200)
            response.send({
                message:'updated image succesfully',
                data:savedProduct
            })


        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                message:'unable to upload image'
            })
        }
    },

    // Pagenation.....

    pagination: async (request,response)=>{
        const {pageIndex,pageSize,order,sortParam} = request.query;
        const orderParam =order === 'asc'? '':'-'
        try{
                const count = await productsModal.countDocuments();
                const roundedCount = Math.ceil(count/pageSize)
            const metadata={
                currentPage:parseInt(pageIndex)+1,
                noOfPages:count/pageSize,
                hasNext: (roundedCount === pageIndex+1),
                hasPrevious:pageIndex > 0
            }
            const products = await productsModal.find()
                                .skip(pageIndex*pageSize)
                                // .sort('discount') // Ascending Order
                                .sort(orderParam+sortParam)
                                .limit(pageSize)
            response.status(200)
            response.send({
                metadata,
                data:products
            })
        }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrieve product',
                error:error
            })
        }
    }
}
module.exports =productsCtrl;