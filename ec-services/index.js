const express = require('express')
const app = express()
// This the first api
app.get('/',(request,response)=>{
    response.send('Welcome to Express Js')
})
// another api 

app.get('/products',(request,response)=>{
    response.send({
        products:[
            {
            name:'Iphone 16 promax',
            price:49999
        },
        {
            name:'Realme 7',
            price:25600
        },
        {
            name:'Motorola',
            price:49999
        },
        {
            name:'Iphone 16 promax',
            price:49999
        },
        ]
    })
})
// Another Api for employee
app.get('/employee',(request,response)=>{
    response.send({
        employee:[
            {
                name:'Sewagh',
                salary:35000,
                role:'software engineer'
            },
            {
                name:'Ravi',
                salary:35000,
                role:'software engineer'
            },
        ]
    })
})

app.listen(3000,()=>{
    console.log('server is up on running')
})