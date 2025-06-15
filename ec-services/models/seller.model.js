const mongoose = require('mongoose')

const sellerSchema= new mongoose.Schema({
        name:{type:"string"},
        businessName:{type:'string'},
        email:{type:"string"},
        phone:{type:"string"},
        address:{
            street:{type:"string"},
            city:{type:"string"},
            state:{type:"string"},
            postalCode:{type:"string"},
            country:{type:"string"}    
        },
        gstNumber:{
                type:'string',
                unique:true
        },
        bankDetails:{
              accountNumber:{type:"string"},
              bankName:{type:"string"}, 
              ifscCode:{type:"string"} 
        },
        storeUrl:{
                type:'string',
                unique:true
        },
        rating:{
                type:'Number',
                default:0
        },
        totalSales:{
                type:'Number',
                default:0
        },
        isVerified:{
                type:'boolean',
                default:false
        },
        createdAt:{
                type:'Date',
                default:Date.now
        },
        updatedAt:{
                type:'Date',
                default:Date.now
        }

 })

 sellerSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

 const sellerModel = mongoose.model('seller',sellerSchema)
 module.exports = sellerModel;