const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        default:0,
    },
    title:{
        type:String,
        default:null
    },
    description:{
        type:String,
        default:null
    },
    // Foreign Key
    productId:{
        type:String
    },
    userId:{
        type:String
    }

 });
//  const productModel = mongoose.Schema('products',productSchema)

 const reviewModel =mongoose.model('reviews',reviewSchema);
 module.exports = reviewModel;