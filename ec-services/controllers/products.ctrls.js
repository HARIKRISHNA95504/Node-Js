const { response } = require("express");

const products =[
    {
        id:1,
        name:'hari',
        salary:23000
    },
    {
        id:2,
        name:'rikitha',
        salary:23000
    },
    {
        id:3,
        name:'ravindra',
        salary:23000
    },
    {
        id:4,
        name:'Kalyan',
        salary:29400
    },
]

const productsCtrl={
    getAll:(request,response)=>{
        response.send({products:products});
    },
    //To Retrive the Product Based on Params
    // getById:(request,response)=>{
    //     console.log(request.params)
    // }

    // To retrive the Product with query Params
    // getById:(request,response)=>{
    //     console.log(request.query)
    // }

    // To retrive the specific product
    getById:(request,response)=>{
        const filteredProduct = products.find(product =>product.id==request.params.id)
        if(filteredProduct){
            response.send(filteredProduct)
        }
        else{
            response.send({message:'unable to matching product'})
        }
    },
    // to delete a product
    delete:(request,response)=>{
        const index=products.findIndex(product=>product.id == request.params.id);
        products.splice(index,1)
        if(index !==-1){
                response.send({message:'deleted product successfully'})
        }else{
            response.send({message:"unable to find the index"});
        }
    },
    create:(request,response)=>{
        console.log(request.body)
        products.push(request.body);
        response.send({
                message:'inserted message successfully'
    }   )

    },
    update:(request,response)=>{
       const index = products.findIndex(product => product.id === parseInt(request.params.id))
       if (index !==-1){
        products.splice(index,1,request.body)
        response.send({
            message:"Updated Successsfully"
        })
       }else{
        message:"unable to find the matching product"
        } 
    }
}

// const productsCtrl={
//     getAll:(request,response)=>{
//         response.send({
//             products:[
//                 {
//                     name:'Iphone 16 promax',
//                     price:49999
//                 },
//                 {
//                     name:'Realme 7',
//                     price:25600
//                 },
//                 {
//                     name:'Motorola',
//                     price:49999
//                 },
//             ]
//         });
//     }
// }
module.exports =productsCtrl;