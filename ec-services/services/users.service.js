const userModel = require('../models/user.model')

const userSvc = {
    create: async(data) =>{
        const user = new userModel(data);
        return await user.save();
    },
    getAll:async()=>{
        return user.find()
    },
    getById: async()=>{
        return user.findById(id);
    }

}
module.exports =userSvc;