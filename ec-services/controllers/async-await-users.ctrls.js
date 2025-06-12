const {request,response} = require('express')
const userModel = require('../models/user.model')
const { getAll } = require('./async-await-products.ctrls')


const usersCtrl={
    getAll: async(request,response)=>{
        try{
            const users = await userModel.find()
            response.status(200)
            response.send({
                message:'retrieve products successfully',
                data:users
            })

        }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrieve users'
            })
        }
    }
}

module.exports = usersCtrl;