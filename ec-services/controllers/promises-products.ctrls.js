const { response } = require("express");
const products=[]
const productsModal = require('../models/product.model');
const productModel = require("../models/product.model");

const productsCtrl={
    getAll:(request,response)=>{
       productsModal.find()
        .then(products=>{
                response.status(200)
                response.send({
                    message:'retrive products successfully',
                    data:products
                })

            }).catch(error=>{
                response.status(501)
                response.send({
                    message:'unable to retrive the products',
                    error:error
                })
                
            })

    },
    //To Retrive the Product Based on Params
    // getById:(request,response)=>{
    //     console.log(request.params)
    // }

    // To retrive the Product with query Params
    // getById:(request,response)=>{
    //     console.log(request.query)
    // }

    // To retrive the specific product
    getById:(request,response)=>{
        const productId = request.params.id;
        productsModal.findById(productId)
            .then(product=>{

                    // response.send({
                    //     message:'retrive product successfully',
                    //     data:product
                    // })
                    if(product){
                        response.status(200)
                        response.send({
                        message:'retrive product successfully',
                        data:product
                    })
                    }else{
                        response.status(404)
                        response.send({
                        message:' product not found',
                    })
                    }

                }).catch(error=>{
                    response.status(500)
                    response.send({
                        message:'unable to retrive the product',
                        error:error
                    })
                    
                })

    },
    // to delete a product
    delete:(request,response)=>{
        const productId = request.params.id;
        productsModal.findByIdAndDelete(productId)
            .then(product=>{
                    if(product){
                        response.send({
                        message:'Deleted product successfully',
                        data:product
                    })
                    }else{
                         response.send({
                            message:'product does not exist',
                        })
                    }

                }).catch(error=>{
                    response.send({
                        message:'unable to Delete the product',
                        error:error
                    })
                    
                })
       
    },
    create:(request,response)=>{
        const product = new productsModal(request.body)
        product.save()
             .then(savedProduct=>{
                response.status(201)
                 response.send({
                    message:'inserted product successfully',
                    data: savedProduct
                    })

            }).catch(error=>{
                response.status(500)
                response.send({
                    message:'unable to save the product',
                    error:error
                })
                
            })

    },
    update:(request,response)=>{
        const productId = request.params.id
        productsModal.findByIdAndUpdate(productId,{$set:request.body},{new:true}) 
        // {new : true} it returns the lastest updates of product
        .then(savedProduct=>{
                response.status(200)
                 response.send({
                    message:'Updated product successfully',
                    data: savedProduct
                    })

            }).catch(error=>{
                response.status(500)
                response.send({
                    message:'unable to Update the product',
                    error:error
                })
                
            })
       
    }
}

// const productsCtrl={
//     getAll:(request,response)=>{
//         response.send({
//             products:[
//                 {
//                     name:'Iphone 16 promax',
//                     price:49999
//                 },
//                 {
//                     name:'Realme 7',
//                     price:25600
//                 },
//                 {
//                     name:'Motorola',
//                     price:49999
//                 },
//             ]
//         });
//     }
// }
module.exports =productsCtrl;