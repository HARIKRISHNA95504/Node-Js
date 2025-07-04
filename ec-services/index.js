const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()


const productsCtrl = require('./controllers/products.ctrls')
const employeeCtrls = require('./controllers/employees.ctrls')
const productsRouter = require('./routers/products.router')
const usersRouter = require('./routers/users.router')
const sellerRouter = require('./routers/sellers.router')
const reviewsRouter = require('./routers/reviews.router')
const cartsRouter = require('./routers/carts.router')
// const usersRouter = require('./routers/users.router')
// const usersCtrl = require('./controllers/users.ctrl')

app.use(express.static('uploads/'))  // i want to uploads folder out side the application
app.use(bodyParser.json())

// This the first api
app.get('/',(request,response)=>{
    response.send('Welcome to Express Js')
})
// another api 
app.use('/products',productsRouter)
app.use('/users',usersRouter)
app.use('/sellers',sellerRouter)
app.use('/reviews',reviewsRouter)
app.use('/carts',cartsRouter)
// app.use('/users',usersRouter)
// app.get('/products/:id',productsCtrl.getById)
// app.delete('/products/:id',productsCtrl.delete)
// app.get('/products',productsCtrl.getAll)
// app.get('/employees',employeeCtrls.getAll)
// app.post('/products',productsCtrl.create)
// app.put('/products/:id',productsCtrl.update)

// app.get('/products',(request,response)=>{
//     response.send({
//         products:[
//             {
//             name:'Iphone 16 promax',
//             price:49999
//         },
//         {
//             name:'Realme 7',
//             price:25600
//         },
//         {
//             name:'Motorola',
//             price:49999
//         },
//         {
//             name:'Iphone 16 promax',
//             price:49999
//         },
//         ]
//     })
// })
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
mongoose.connect('mongodb+srv://Harikrishna:%4020FH1a0596@nodejs-cluster1.rm9towc.mongodb.net/ecommerce-dev?retryWrites=true&w=majority&appName=Nodejs-Cluster1').then(()=>{
    console.log('connected to  DB Successfully!')
}).catch((error)=>{
    console.log(error)

})