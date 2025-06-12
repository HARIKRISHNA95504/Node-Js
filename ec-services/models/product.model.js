// const mongoose = require('mongoose')

// const productSchema = mongoose.Schema({
//     name:{
//         type:String,
//         default:null,
//         required:true
//     },
//     imgSrc:{
//         type:String,
//         default:''
//     },
//     actualPrice:{
//         type:String,
//         default:0
//     },
//     discount:{
//         type:Number,
//         default:0
//     },
//     specifications:{
//         type:Array,
//         default:[]
//     },
//     inStock:{
//         type:Boolean,
//         default:[]
//     }

//  });
//  const productModel = mongoose.Schema('products',productSchema)
//  module.exports = productModel;

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        default:null,
        required:true
    },
    imgSrc:{
        type:String,
        default:''
    },
    actualPrice:{
        type:String,
        default:0
    },
    discount:{
        type:Number,
        default:0
    },
    specifications:{
        type:Array,
        default:[]
    },
    inStock:{
        type:Boolean,
        default:[]
    }

 });
//  const productModel = mongoose.Schema('products',productSchema)
 module.exports =mongoose.model('product',productSchema);