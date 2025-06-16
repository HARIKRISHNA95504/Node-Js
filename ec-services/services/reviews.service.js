const reviewModel = require('../models/review.model')

const reviewSvc = {
    create: async(data) =>{
        const review = new reviewModel(data);
        return await review.save();
    },
    getAll:async()=>{
        return reviewModel.find()
    },
    getById: async(id)=>{
        return reviewModel.findById(id);
    },
    // this retrive revies for the particular product
    getByProductId:(productId)=>{
        return reviewModel.find({productId:productId})
    },
    deleteById: async(id)=>{
        return reviewModel.findByIdAndDelete(id)
    },
    update: async(id,data)=>{
        return reviewModel.findByIdAndUpdate(id,{$set:data},{new:true});
    },
    getAvgRating:(productId)=>{
        return reviewModel.aggregate([
            {$match :{productId:productId}},
            {$group: {_id:'$productId',averageRating:{$avg :'$rating'}}},
            {$project: {
                _id:0  
            }}  // for ignoring the id in the console
        ])
    },
    getRatingCount:(productId)=>{
        return reviewModel.aggregate([
            {$match :{productId:productId}},
            {$group: {_id:'$rating',count: {$sum :1}}},
         {$project :{
            rating:'_id',
            count:'$count',
            _id:0
         }}// for ignoring the id in the console
        ])
    }

}
module.exports =reviewSvc;