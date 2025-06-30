const mongoose = require('mongoose')
const employeeSchema = new mongoose.Schema({
    firstName:{
        type:String,
        default:null
    },
    lastName:{
        type:String,
        default:null
    },
    emailAddress:{
        type:String,
        default:null
    },
    phoneNumber:{
        type:Number,
        default:null
    },
    password:{
        type:String,
        default:null
    },
    confirmPassword:{
        type:String,
        default:null
    }
});

const employeeModel = mongoose.model('employees',employeeSchema)
module.exports = employeeModel;