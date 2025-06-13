const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        default:null,
    },
    lastName:{
        type:String,
        default:null
    },
    email:{
        type:String,
        default:null
    },
    password:{
        type:String,
        default:null
    },
    otp:{
        type:String,
        default:null
    },
    mobileNo:{
        type:String,
        default:null
    }

 });
//  const productModel = mongoose.Schema('products',productSchema)

 const userModel =mongoose.model('users',userSchema);
 module.exports = userModel;