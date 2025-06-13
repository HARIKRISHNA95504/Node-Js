
// const { response, request } = require("express");

// const users =[
//     {
//         id:1,
//         name:'hari',
//         salary:23000,
//         role:'Software Developer'
//     },
//     {
//         id:2,
//         name:'rikitha',
//         salary:23000,
//         role:'Ai ENGINEER'
//     },
//     {
//         id:3,
//         name:'ravindra',
//         salary:23000,
//         role:"Cloud support Engineeer"
//     },
//     {
//         id:4,
//         name:'Kalyan',
//         salary:29400,
//         role:'Powerbi Developer'
//     },
// ]

// const usersCtrl={
//     getAll:(request,response)=>{
//         response.send({users:users});
//     },
//     //To Retrive the Product Based on Params
//     // getById:(request,response)=>{
//     //     console.log(request.params)
//     // }

//     // To retrive the Product with query Params
//     // getById:(request,response)=>{
//     //     console.log(request.query)
//     // }

//     // To retrive the specific product
//     getById:(request,response)=>{
//         const filteredUser = users.find(user =>user.id==request.params.id)
//         if(filteredUser){
//             response.send(filteredUser)
//         }
//         else{
//             response.send({message:'unable to matching user'})
//         }
//     },
//     // to delete a product
//     // delete:(request,response)=>{
//     //     const index=products.findIndex(product=>product.id == request.params.id);
//     //     products.splice(index,1)
//     //     if(index !==-1){
//     //             response.send({message:'deleted product successfully'})
//     //     }else{
//     //         response.send({message:"unable to find the index"});
//     //     }
//     // },
//     // to delete a user
//     delete:(request,response)=>{
//         const index =users.findIndex(user=>user.id ==request.params.id);
//         users.splice(index,1)
//         if(index !==-1){
//             response.send({message:"deleted product successfully"})
//         }
//         else{
//             response.send({message:"unable to find index"})
//         }
//     },
//     // create:(request,response)=>{
//     //     console.log(request.body)
//     //     products.push(request.body);
//     //     response.send({
//     //             message:'inserted message successfully'
//     // }   )

//     // },
//     // update:(request,response)=>{
//     //    const index = products.findIndex(product => product.id === parseInt(request.params.id))
//     //    if (index !==-1){
//     //     products.splice(index,1,request.body)
//     //     response.send({
//     //         message:"Updated Successsfully"
//     //     })
//     //    }else{
//     //     message:"unable to find the matching product"
//     //     } 
//     // }
//     create:(request,response)=>{
//         users.push(request.body)
//         response.send({message:"user inserted suceessfully"})
//     },
//     update:(request,response)=>{
//         const index = users.findIndex(user => user.id ===parseInt(request   .params.id))
//         if (index !==-1){
//             users.splice(index,1,request.body)
//             response.send({message:"user updated succeccefully"})
//         }else{
//         message:"unable to find the matching product"
//         } 
//     }
// }

// // const productsCtrl={
// //     getAll:(request,response)=>{
// //         response.send({
// //             products:[
// //                 {
// //                     name:'Iphone 16 promax',
// //                     price:49999
// //                 },
// //                 {
// //                     name:'Realme 7',
// //                     price:25600
// //                 },
// //                 {
// //                     name:'Motorola',
// //                     price:49999
// //                 },
// //             ]
// //         });
// //     }
// // }
// module.exports =usersCtrl;
const { response, request } = require('express');
const userService = require('../services/users.service')
const bcrypt = require('bcrypt');

const userCtrl ={
    register:async(request,response)=>{
        try{
            const hasedPassword = await bcrypt.hash(request.body.password,5);
            const user = await userService.create({...request.body,password:hasedPassword})
            response.status(201)
            response.send({
                message:'Register User Successfully',
                data:user
            })

        }catch(error){
            response.status(500)
            response.send({
                error:'unable to register the user'
            })
        }
    },
    loginWithPassword:async(request,response)=>{
        try{
            const user = await userService.getByEmailOrMobileNo(request.body.emailOrMobileNo)
            if(user){
                const isPasswordMatched = await bcrypt.compare(request.body.password,user.password);
                if(isPasswordMatched){
                    response.status(200)
                    response.send({
                        message:'Logged In Successfully!!'
                    })
                    
                }else{
                    response.status(400)
                    response.send({
                        message:'incorrect Password',
                    })
                }
                }else{
                response.status(400)
                response.send({
                    message:'unregistered email or mobile no'
                })
            }

        }catch(error){
            response.status(500)
            response.send({
                error:'unable to login the user'
            })
        }
    },
    deleteUser: async(request,response)=>{
        try{
            await userService.deleteById(request.params.id);
            response.status(200)
            response.send({
                message:"deleted user successfully"
            })

        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                error:"unable to delete the user"
            })
        }
    },

    getById: async(request,response)=>{
        try{
            const user = await userService.getById(request.params.id);
            response.status(200)
            response.send({
                message:"  Retrieved user successfully",
                data:user
            })

        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                error:"unable to retrieve the user"
            })
        }
    },

    getAll: async(request,response)=>{
        try{
            const user = await userService.getAll();
            response.status(200)
            response.send({
                message:"  Retrieved users successfully",
                data:user
            })

        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                error:"unable to retrieve the users"
            })
        }
    },
    updateUser: async(request,response)=>{
        try{
            const user = await userService.updateUser(request.params.id,request.body)
            response.status(200)
            response.send({
                message:'user updated successfully',
                data:user
            })

        }catch(error){
            response.status(500)
            response.send({
                error:'unable to update user'
            })
        }
    }
}

module.exports = userCtrl;