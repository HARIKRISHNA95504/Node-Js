const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        default:null,
        required:true
    },
    role:{
        type:String,
        default:null,
        required:true
    },
    company:{
        type:String,
        default:null,
        required:true
    },
    salary:{
        type:String,
        default:0
    }
})

module.exports = mongoose.model('user',userSchema)