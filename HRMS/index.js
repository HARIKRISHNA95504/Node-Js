const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000


const employeeRouter = require('./routers/employeeRouter')

app.get('/',(request,response)=>{
    response.send('Welcome to The KRIS HRMS APP Based ON Expreess JS')
})


app.use(express.json());
app.use('/employees',employeeRouter)


app.listen(port,()=>{
    console.log('Server is Up On Running!')
})

mongoose.connect('mongodb+srv://Harikrishna:%4020FH1a0596@nodejs-cluster1.rm9towc.mongodb.net/KRIS_HRMS?retryWrites=true&w=majority&appName=Nodejs-Cluster1').then(()=>{
    console.log('connected to  DB Successfully!')
}).catch((error)=>{
    console.log(error)

})