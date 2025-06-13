const userModel = require('../models/user.model')

const userSvc = {
    create: async(data) =>{
        const user = new userModel(data);
        return await user.save();
    },
    getAll:async()=>{
        return userModel.find()
    },
    getById: async()=>{
        return userModel.findById(id);
    },
    getByEmailOrMobileNo:(emailMobileNo)=>{
        return userModel.findOne({
            $or:[
                {email:emailMobileNo},
                {mobileNo:emailMobileNo}
            ]
        })
    },
    deleteById: async(id)=>{
        return userModel.findByIdAndDelete(id)
    },
    updateUser : async(id,data)=>{
        return userModel.findByIdAndUpdate(id,{$set:data},{new:true});
    }

}
module.exports =userSvc;