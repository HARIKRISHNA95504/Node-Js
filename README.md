# Git 
* Navigate to project folder
```
cd C:\Users\HARIKRISHNA\Desktop\NodeJs
```
* initialize the git
```
git init
```
* Add remote origin
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git remote add origin https://github.com/HARIKRISHNA95504/Node-Js.git
```
* stage Files
```
git add .
```
* Commit changes
```
git commit -m "crates express project"
```
* Push to the remote repository
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git branch -M main
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git push -u origin main
```
* having error on the pushing time
```
To https://github.com/HARIKRISHNA95504/Node-Js.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/HARIKRISHNA95504/Node-Js.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
```
git pull origin main --allow-unrelated-histories
git push origin main
```
* for the forced to push
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git push origin main --force
```
* Error
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git push
To https://github.com/HARIKRISHNA95504/Node-Js.git
 ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/HARIKRISHNA95504/Node-Js.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
* Another way to push files to git
* step - 1
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git pull origin main --rebase
```
* step - 2
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs> git push origin main
```
# 24-10-2024  Topic: Project Creation
# Step - 1:
* create of Project folder:
* go to the respected path
```
mkdir ec-services
```
```
 C:\Users\HARIKRISHNA\Desktop\NodeJs> mkdir ec-services
```
# step -2 : initialization
* after creating the folder navigate the respectd project folder
* then run the commeande
```
npm init
```
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs\ec-services> npm init
```
```
PS C:\Users\HARIKRISHNA\Desktop\EmpSys\emp-system> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (ec-services)
version: (1.0.0)                                                                                      
description:                                                                                          
entry point: (index.js)                                                                               
test command:                                                                                         
git repository:                                                                                       
keywords:                                                                                             
author: Harikrishna                                                                                   
license: (ISC)                                                                                        
About to write to C:\Users\HARIKRISHNA\Desktop\EmpSys\emp-system\package.json:

{
  "name": "emp-system",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": ,
  "license": "ISC",
  "description": ""
}


Is this OK? (yes)
```
# step- 3 :Express Framework installation
* Installation
```
npm install express
```
```
PS C:\Users\HARIKRISHNA\Desktop\EmpSys\ec-services> npm install express
```
# step - 4 :
* crate file in ec-services
* the file name is index.js
* it create a node_modules folrder
# step - 5 :
* creation of entry file for the app(index.js)
* index.js
# step 6 : create a server 
* index.js
* 1. import a express
```
const express = require('express')
```
2. create a object from express function
```
const app = express()
```
3. Starts the server on the port number mentioned
```
app.listen(prompt,()=>{
    console.log('Server is Up On Running!')
})
```
* index.js
```
const express = require('express')

const app = express()

app.listen(prompt,()=>{
    console.log('Server is Up On Running!')
})
```
* to run the server use this command
```
node index.js
```
# 29-10-2024 Topic : MangoDb 
* first go to the mangodb website
```
https://cloud.mongodb.com/v2/6840d8e387b5b152d3f649e4#/overview
```
* click on create
```
to create a cluster
Note : only one cluster is free
```
* to connect this click on connetct
* Then go to the compass
* connecting with the mangodb compass give the details
```
* i have mangodb compass install
```
* take the url is mandatory for conneting the database
* Mangodb Compass installation
```
https://www.mongodb.com/try/download/shell
```
* to douwnload this
```
MongoDB Compass Download (GUI)
```
* go to the database Access
```
* inside this password is autogenerated
* give the username in the password section
* give the as "Atlas Admin"
* then click Add user
```
* Go the mangodb connection give the Url and Click on Conetion
```
UserName: Harikrishna
Password: @20FH1a0596
```
```
mongodb+srv://Harikrishna:<db_password>@nodejs-cluster1.rm9towc.mongodb.net/
```
```
mongodb+srv://Harikrishna:%4020FH1a0596@nodejs-cluster1.rm9towc.mongodb.net/
```
* go to the mangodb compasss
* click on the add New connection and past the url
```
mongodb+srv://Harikrishna:@20FH1a0596@nodejs-cluster1.rm9towc.mongodb.net/
```
* After that Open the mangodb compass
*  in mangodb click on conected cluster
*  then right corner have a mangodb shell
*  in that click on create database to for database creation
*  and give the database name and collection Name
*  then click on create
# 30-10-2024 Topic : Mangodb Setup & Querie
# Commands
* showdbs
* Atlas atlas-purygc-shard-0 [primary] ecommerce> show dbs
```
ecommerce-dev    8.00 KiB
admin          360.00 KiB
local           30.64 GiB
```
* switched to database
* use databaseName 
```
 Atlas atlas-purygc-shard-0 [primary] ecommerce> use ecommerce-dev
```
* to see the what are the collections we have
* command : show collections
*  Atlas atlas-purygc-shard-0 [primary] ecommerce> show collections
```
show collections
users
```
* To see the records insides the collection
* command : db.users.countDocuments()
* Atlas atlas-purygc-shard-0 [primary] ecommerce> db.users.countDocuments()
```
db.users.countDocuments()
0
```
* To insert the record in to this
* command : db.users.insertOne({firstName:'Charan',lastName:'K',email:'charan.k@gmail.com',mobile:'9090909090'})
*  Atlas atlas-purygc-shard-0 [primary] ecommerce> db.users.insertOne({firstName:'Charan',lastName:'K',email:'charan.k@gmail.com',mobile:'9090909090'})
```
{
  acknowledged: true,
  insertedId: ObjectId('68411eb61c399b5b0f065846')
}
```
* Retriving the all records in the collection
* command : db.users.find()
* Atlas atlas-purygc-shard-0 [primary] ecommerce> db.users.find()
```
{
  _id: ObjectId('68411eb61c399b5b0f065846'),
  firsrName: 'Charan',
  lastName: 'K',
  email: 'charan.k@gmail.com',
  mobile: 9090909090
}
```
* To retrive a specific record
* command : db.findOne()
*  Atlas atlas-purygc-shard-0 [primary] ecommerce> db.users.findOne({email:'charan.k@gmail.com'})
```
{
  _id: ObjectId('68411eb61c399b5b0f065846'),
  firsrName: 'Charan',
  lastName: 'K',
  email: 'charan.k@gmail.com',
  mobile: 9090909090
}
```
* To remove or delete a particular method
*  command : db.users.deleteOne({_id: ObjectId('684120461c399b5b0f065847')})
* Atlas atlas-purygc-shard-0 [primary] ecommerce> db.users.deleteOne({  _id: ObjectId('684120461c399b5b0f065847')})
```
{
  acknowledged: true,
  deletedCount: 1
}
```
* To update the record
* command : db.users.update
* Atlas atlas-purygc-shard-0 [primary] ecommerce> db.users.updateOne({id: ObjectId('68411eb61c399b5b0f065846')},{$set:{mobile:9898989898}})
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
* db.users.find()
{
  _id: ObjectId('68411eb61c399b5b0f065846'),
  firsrName: 'Charan',
  lastName: 'K',
  email: 'charan.k@gmail.com',
  mobile: 9898989898
}

```
* Install Mangose
* integrate mangose library
* for the URL
* go to the database access and click on connect
* Then Click on Drivers option
* And then  Add your connection string into your application code
* mongodb+srv://Harikrishna:<db_password>@nodejs-cluster1.rm9towc.mongodb.net/?retryWrites=true&w=majority&appName=Nodejs-Cluster1
* index.js
```
const mongoose = require('mongoose')
```
* in the below url the password must be %40 for the '@'
* insted of Password: @20FH1a0596
```
Password : %4020FH1a0596
```
```
mongoose.connect('mongodb+srv://Harikrishna:%4020FH1a0596@nodejs-cluster1.rm9towc.mongodb.net/ecommerce-dev?retryWrites=true&w=majority&appName=Nodejs-Cluster1').then(()=>{
    console.log('connected to  DB Successfully!')
}).catch((error)=>{
    console.log(error)

})
```
* To create Model for a collection:
```
const mongoose = require('mongoose')
 const productSchema = mongoose.Schema({
    name:'String',
    imgSrc:'String',
    price:'String'

 })

 const productModel = mongoose.model(collectionName,productSchema);
```
* create folder in ec-services the folder name is 'models'
* And create file the file name is 'product.model.js'
* product.model.js
```
const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type:String,
        default:null,
        required:true
    },
    email:{
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
 const productModel = mongoose.Schema('products',productSchema)
 module.exports = productModel;
```
# date: 1-11-2024 Topic: mongoose CRUD operations
# to automatically run the server 
* install
* Nodemon: it monitors the file changes and restarts the server.
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs\ec-services> npm install -global nodemon
```
* To start the server
* nodemon
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs\ec-services> npm install -global nodemon
```
# date:5-11-2024 Topic:Pagination
# Pagination
* in postman we can the url like these
```
http://localhost:3000/products/pagination?pageIndex=0&pageSize=1
```
* And the we enterd the values of pageIndex AND pageSize for what ever the records we want
* than we will get the products
```
{
    "metadata": {
        "noOfPages": 2,
        "hasNext": true,
        "hasPrevious": false
    },
    "data": [
        {
            "_id": "684a1757ca394d4e34f9b862",
            "name": " Vivo Galaxy M35 5G (Moonlight Blue, 128 GB)",
            "imgSrc": "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/x/y/l/-original-imah8pvvhmj76hvg.jpeg?q=70",
            "actualPrice": "59900",
            "discount": 20,
            "specifications": [
                "9 GB RAM | 128 GB ROM",
                "16.76 cm (6.6 inch) Display",
                "64MP Rear Camera",
                "6000 mAh Battery",
                "5 YEAR"
            ],
            "inStock": true,
            "__v": 0
        }
    ]
}
```
* For Pagination we can write the code
```
pagination: async (request,response)=>{
        const {pageIndex,pageSize} = request.query;
        try{
                const count = await productsModal.countDocuments();
                const roundedCount = Math.ceil(count/pageSize)
            const metadata={
                currentPage:parseInt(pageIndex)+1,
                noOfPages:count/pageSize,
                hasNext: (roundedCount === pageIndex+1),
                hasPrevious:pageIndex > 0
            }
            const products = await productsModal.find()
                                .skip(pageIndex*pageSize)
                                .limit(pageSize)
            response.status(200)
            response.send({
                metadata,
                data:products
            })
        }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrieve product',
                error:error
            })
        }
    }
```
# Sorting :
* Ascending or descendeing order is a Sortung
* give the credential in the postman
```
http://localhost:3000/products/pagination?pageIndex=0&pageSize=15
```
```
pagination: async (request,response)=>{
        const {pageIndex,pageSize} = request.query;
        try{
                const count = await productsModal.countDocuments();
                const roundedCount = Math.ceil(count/pageSize)
            const metadata={
                currentPage:parseInt(pageIndex)+1,
                noOfPages:count/pageSize,
                hasNext: (roundedCount === pageIndex+1),
                hasPrevious:pageIndex > 0
            }
            const products = await productsModal.find()
                                .skip(pageIndex*pageSize)
                                .sort('discount') // Ascending Order
                                .limit(pageSize)
            response.status(200)
            response.send({
                metadata,
                data:products
            })
        }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrieve product',
                error:error
            })
        }
    }
```
* Here is the additional requirements are orderParam and sortParam included
```
pagination: async (request,response)=>{
        const {pageIndex,pageSize,order,sortParam} = request.query;
        const orderParam =order === 'asc'? '':'-'
        try{
                const count = await productsModal.countDocuments();
                const roundedCount = Math.ceil(count/pageSize)
            const metadata={
                currentPage:parseInt(pageIndex)+1,
                noOfPages:count/pageSize,
                hasNext: (roundedCount === pageIndex+1),
                hasPrevious:pageIndex > 0
            }
            const products = await productsModal.find()
                                .skip(pageIndex*pageSize)
                                // .sort('discount') // Ascending Order
                                .sort(orderParam+sortParam)
                                .limit(pageSize)
            response.status(200)
            response.send({
                metadata,
                data:products
            })
        }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrieve product',
                error:error
            })
        }
    }
```
* in postman we can give like these
```
http://localhost:3000/products/pagination?pageIndex=0&pageSize=15&order=asc&sortParam=discount
```

# User Model
* create a model the neame should be user.model.js
* user.model.js
```
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
```
* creating a folder services
* users.service.js
```
const userModel = require('../models/user.model')

const userSvc = {
    create: async(data) =>{
        const user = new userModel(data);
        return await user.save();
    },
    getAll:async()=>{
        return user.find()
    },
    getById: async()=>{
        return user.findById(id);
    }

}
module.exports =userSvc;
```
* users.ctrl.js
```
const userService = require('../services/users.service')

const userCtrl ={
    register:async(request,response)=>{
        try{
            const user = await userService.create(request.body)
            response.status(201)
            response.send({
                message:'Register User Successfully',
                data:user
            })

        }catch(error){
            response.status(500)
            response.send({
                error:'unable to register the user'
            })
        }
    }
}

module.exports = userCtrl;
```
* changes in
* users.router.js
```
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users.ctrl')
router.post('/register',usersCtrl.register)
module.exports =router;

```
# date: 7-11-2024  Topic: Hashing
* Hashing Technique : Hashing is convert plain text into hash.
* Bcrypt:
* installation :
```
npm install bcrypt
```
```
PS C:\Users\HARIKRISHNA\Desktop\NodeJs\ec-services> npm install bcrypt
```

* To Hash Password :
```
const bcrypt = require('bcrypt');

    await bcrypt.hash(myPlaintextPassword, saltRounds)
```
* To compare Hash with Plain password :
```
 await bcrypt.compare(myPlaintextPassword, hash);
```
* to Login give the credentials like theese
* in postman 
```
http://localhost:3000/users/login-with-password
```
* in postman method is "Post"
* then go to the "body" and "raw" give this type of credentials
* for successsfull login
```
{
   "emailOrMobileNo": "srinu@gmail.com",
    "password": "srinu123"
}
```
* users.ctrl.js
```
loginWithPassword:async(request,response)=>{
        try{
            const user = await userService.getByEmailOrMobileNo(request.body.emailOrMobileNo)
            if(user){
                const isPasswordMatched = await bcrypt.compare(request.body.password,user.password);
                if(isPasswordMatched){
                    response.status(200)
                    response.send({
                        message:'Logged In Successfully!!'
                    })
                    
                }else{
                    response.status(400)
                    response.send({
                        message:'incorrect Password',
                    })
                }
                }else{
                response.status(400)
                response.send({
                    message:'unregistered email or mobile no'
                })
            }

        }catch(error){
            response.status(500)
            response.send({
                error:'unable to login the user'
            })
        }
    }
```
* for delete user
```
deleteUser: async(request,response)=>{
        try{
            await userService.deleteById(request.params.id);
            response.status(200)
            response.send({
                message:"deleted user successfully"
            })

        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                error:"unable to delete the user"
            })
        }
    }
```
* for get the user by Id
 ```
getById: async(request,response)=>{
        try{
            const user = await userService.getById(request.params.id);
            response.status(200)
            response.send({
                message:"  Retrieved user successfully",
                data:user
            })

        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                error:"unable to retrieve the user"
            })
        }
    },
```
* for get the all users
```
 getAll: async(request,response)=>{
        try{
            const user = await userService.getAll();
            response.status(200)
            response.send({
                message:"  Retrieved users successfully",
                data:user
            })

        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                error:"unable to retrieve the users"
            })
        }
    },
```
* for update the user
```
updateUser: async(request,response)=>{
        try{
            const user = await userService.updateUser(request.params.id,request.body)
            response.status(200)
            response.send({
                message:'user updated successfully',
                data:user
            })

        }catch(error){
            response.status(500)
            response.send({
                error:'unable to update user'
            })
        }
    }
```
* users.service.js
```
const userModel = require('../models/user.model')

const userSvc = {
    create: async(data) =>{
        const user = new userModel(data);
        return await user.save();
    },
    getAll:async()=>{
        return userModel.find()
    },
    getById: async()=>{
        return userModel.findById(id);
    },
    getByEmailOrMobileNo:(emailMobileNo)=>{
        return userModel.findOne({
            $or:[
                {email:emailMobileNo},
                {mobileNo:emailMobileNo}
            ]
        })
    },
    deleteById: async(id)=>{
        return userModel.findByIdAndDelete(id)
    },
    updateUser : async(id,data)=>{
        return userModel.findByIdAndUpdate(id,{$set:data},{new:true});
    }

}
module.exports =userSvc;
```
* users.router.js
```
router.post('/register',usersCtrl.register)
router.post('/login-with-password',usersCtrl.loginWithPassword)
router.delete('/:id',usersCtrl.deleteUser)
router.get('/:id',usersCtrl.getById)
router.get('/',usersCtrl.getAll)
router.put('/:id',usersCtrl.updateUser)
```
# Date : 08-11-2024 Topic: generate access token
* giveing these details in
* users.ctrl.js
```
  loginWithPassword:async(request,response)=>{
        try{
            const user = await userService.getByEmailOrMobileNo(request.body.emailOrMobileNo)
            if(user){
                const isPasswordMatched = await bcrypt.compare(request.body.password,user.password);
                if(isPasswordMatched){
                    const token = await jwt.sign({
                        email:user.email,
                        mobile:user.mobileNo
                    },'you can not steel my password',{expiresIn:'1h'})
                    response.status(200)
                    response.send({
                        message:'Logged In Successfully!!',
                        accesstoken:token
                    })
                    
                }else{
                    response.status(400)
                    response.send({
                        message:'incorrect Password',
                    })
                }
                }else{
                response.status(400)
                response.send({
                    message:'unregistered email or mobile no'
                })
            }

        }catch(error){
            response.status(500)
            response.send({
                error:'unable to login the user'
            })
        }
    }
```
* than we get the Json web token
* give this in postman body and raw
```
{
   "emailOrMobileNo": "srinu@gmail.com",
    "password": "srinu123"
}
```
* then will get the accesstoken
```
{
    "message": "Logged In Successfully!!",
    "accesstoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNyaW51QGdtYWlsLmNvbSIsIm1vYmlsZSI6IjU2MzYyNjUzMTQiLCJpYXQiOjE3NDk5NTI4MTcsImV4cCI6MTc0OTk1NjQxN30.Fe0SrBM8uKuENWaFs9Mum0wgyE4tEr47xBldYmueHx8"
}
```
* To verify the token
* create a seperate folder in EC-services
* the folder name should be middlewares
* then create a file inside the middlewares folder the file should be token-validation.js
* token-validation.js
```

const jwt = require('jsonwebtoken')
const tokenValidator = async (request,response,next)=>{
    try{
        if(request.headers.authorization){
            const token = request.headers.authorization.replace("Bearer ", "");
            const userInfo = await jwt.verify(token,'you can not steel my password')
            next();
        }else{
            response.status(401)
            response.send({
            error:'Token is required'
            })
        }

    }catch(error){
        console.log(error)
        response.status(500)
        response.send({
            error:'unable to validate the token'
        })
    }
}

module.exports = tokenValidator;
```
* where the token is validate is
* goto authorization and click on Bearer Token
* then give the access token
* and then validate it
* users.router.js
*  include the function tokenValidator to the respected router
```
const express = require('express');
const router = express.Router();
const tokenValidator = require('../middlewares/token-validation')

const usersCtrl = require('../controllers/users.ctrl')

router.post('/register',usersCtrl.register)
router.post('/login-with-password',usersCtrl.loginWithPassword)
router.delete('/:id',usersCtrl.deleteUser)
router.get('/',tokenValidator,usersCtrl.getAll)
router.get('/:id',usersCtrl.getById)
router.put('/:id',usersCtrl.updateUser)
```
# create a model for seller and Perform CRUD Operations
* Performing CRUD Operations on seller
* seller.model.js
```
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

// sellerSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

 const sellerModel = mongoose.model('seller',sellerSchema)
 module.exports = sellerModel;
```
* sellers.ctrl.js
```
const express = require('express')
const sellerModel= require('../models/seller.model')

const sellerCtrl ={
    create: async (request,response)=>{
        const seller = new sellerModel(request.body)
        try{
            const savedSeller = await seller.save()
            response.status(201).send({
                message:'inserted seller successfully',
                data:savedSeller
            })
        }catch(error){
            console.log(error)
            response.status(500).send({
                error:'unable to insert seller'
            })
        }
    },
    getAll:async(request,response) =>{
        try{
            const sellers = await sellerModel.find()
            response.status(200).send({
                message:'sellers retrieve successfully',
                data:sellers
            })

        }catch(error){
            response.status(500).send({
                error:'unable to retrieve the sellers'
            })
        }
    },
    getById: async(request,response)=>{
        try{
            const seller = await sellerModel.findById(request.params.id)
            if(seller){
                response.status(200).send({
                message:'retrieve seller successfully!!',
                data:seller
            })}else{
                response.status(404).send({
                    message:'seller not found',
                })
            }

        }catch(error){
            response.status(500).send({
                error:'unable to retrive seller'
            })
        }
    },
    update: async(request,response) =>{
        const sellerId = request.params.id
        try{
            const savedSeller  = await sellerModel.findByIdAndUpdate(sellerId,{$set:request.body},{new:true})
            response.status(200).send({
                message:'update seller succcessfully',
                data:savedSeller
            })

        }catch(error){
            response.status(500).send({
                error:'unable to update seller'
            })
        }
    },
    delete: async(request,response) =>{
        const sellerId = request.params.id
        try{
            await sellerModel.findByIdAndDelete(sellerId)
            response.status(200).send({
                message:'successfully deleted seller',
            })

        }catch(error){
            response.status(500).send({
                error:'unable to delete the seller!!'
            })
        }
    },
    patch: async(request,response) =>{
        try{
            const sellerId = request.params.id
            const seller = await sellerModel.findById(sellerId)
            for(let key in request.body){
                seller[key]=request.body[key]
            }

            const sellerUpdate = await sellerModel.findByIdAndUpdate(sellerId,{$set:seller},{new:true})
            response.status(200).send({
                message:'successfully updated the seller fields',
                data:sellerUpdate
            })
            
        }catch(error){
            response.status(500).send({
                error:'unable to updated the seller fields!!'
            })
        }
    }
}

module.exports = sellerCtrl;
```
* sellers.router.js
```
const express = require('express')
const router = express.Router();

const sellersCtrl = require('../controllers/sellers.ctrl')

router.post('/',sellersCtrl.create)
router.put('/:id',sellersCtrl.update)
router.get('/',sellersCtrl.getAll)
router.get('/:id',sellersCtrl.getById)
router.delete('/:id',sellersCtrl.delete)
router.patch('/:id',sellersCtrl.patch)
module.exports = router;
```
* index.js
```
const sellerRouter = require('./routers/sellers.router')

app.use('/sellers',sellerRouter)
```
# 25-11-2024 
* to private the values using token validatator
* which of thw following data private
* that data willbe added tokenvalidator in the file users.router.js
* users.router.js
```
router.get('/',tokenValidator,usersCtrl.getAll)
router.get('/:id',tokenValidator,usersCtrl.getById)
```
* it will use any of teh following data like products also we can validate token
*  you give validate the products just give the tokenvalidator
*  it will extract the function from middlewares
*  products.router.js
```
router.get('/',tokenValidator,productsCtrl.getAll)
router.get('/:id',tokenValidator,productsCtrl.getById)
```
* we can manage the token validator message
* token-validation.js
```

const jwt = require('jsonwebtoken')
const tokenValidator = async (request,response,next)=>{
    try{
        if(request.headers.authorization){
            const token = request.headers.authorization.replace("Bearer ", "");
            const userInfo = await jwt.verify(token,'you can not steel my password')
            next();
        }else{
            response.status(401)
            response.send({
            error:'Token is required'
            })
        }

    }catch(error){
        console.log(error)
        if(error.message.includes('jwt expired')){
            response.status(500)
            response.send({
            error:'Token is Expired'
        })
        }else{
            response.status(500)
            response.send({
                error:'unable to validate the token'
            })
        }
    }
}

module.exports = tokenValidator;
```
# 25-11-2024
* Average rating to display in the website
* step -1
* create a file in models folder
* the name should be review.model.js
* copy the user.model.js code into this change the required fields
* review.model.js
```
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
```
# Step 2
* create the Service for the reviewmodel in services folder
* the name should be reviews.service.js
* copy the users.serivce.js code into this change the required fields
* reviews.service.js
```
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
    }

}
module.exports =reviewSvc;
```
# step 3
* create a controller in controller folder
* the name shold be reviews.ctrl.js
* reviews.ctrl.js
```
const { response, request } = require('express');
const reviewService = require('../services/reviews.service')

const reviewCtrl ={
    create:async(request,response)=>{
        try{
            const review = await reviewService.create(request.body)
            response.status(201)
            response.send({
                message:'crated Review Successfully',
                data:review
            })

        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                error:'unable to create the Review'
            })
        }
    }
    
}

module.exports = reviewCtrl;
```
# step 4
* create a reviews route in the routers folder
* the name sholud be reviews.router.js
* reviews.router.js
```

const express = require('express');
const router = express.Router();
const tokenValidator = require('../middlewares/token-validation')

//import the productsCtrls
const reviewsCtrl = require('../controllers/reviews.ctrl')


router.post('/',tokenValidator,reviewsCtrl.create)


module.exports =router;
```

# Step -5
* index.js
* include these two lines
```
const reviewsRouter = require('./routers/reviews.router')

app.use('/reviews',reviewsRouter)
```
# 26-11-2024 Topic : Average rating Part- 2
* mapping the reviews for the product based on productId
* take the productId in the reviews then mapp to the existing product
* async-await-products.ctrls.js
```
const reviewService = require("../services/reviews.service");

getById: async(request,response)=>{
            const productId = request.params.id
        try{
            const product = await productsModal.findById(productId);
            if(product){
                const reviews = await reviewService.getByProductId(productId)
                response.status(200)
                response.send({
                message:'retrive product successfully',
                data:{...product._doc,reviews}  // Herw the ._doc is the clear the unneceery details 
                })
            }else{
                response.status(404)
                response.send({
                message:' product not found',
                })
            }
         }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrive the product',
                error:error
            })
        }

    }
```
# Aggregation 
# it is a Framework
```
Aggregation Framework : -- Mongoose -Mongo Db - Aggregation Pipeline
> it used for to add multiple stages to the querie
> an aggregation framework query is an array of stages
>  A stage is an object description of how MongoDB should transform any document coming into the stage.

Stages : 

1. $match: It returns the matching documents as an output.

        modelName.aggregate([
            {$match : { age: {$gte : 30}} }
        ])

2. $group : Generates multiple groups from whole documents.

        modelName.aggregate([
            { $group:{ _id:'$rating',count : $sum}}
        ])



    we can write the simple structure instead of the above two queri in a single querie 

  > SINGLE QUERIE WITH $MATCH & $GROUP :

            modelName.aggregate([
                {$match : { age: {$gte : 30}} },
                { $group:{ _id:'$rating',count : $sum}}
            ])


3. $project : Projects Key value pairs with required names.

        modelName.aggregate([
            {$project : {
                rating:'$_id',
                count:'$count'
            }}
        ])
```
* reviews.service.js
```
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
```
* async-await-products.js
```
getById: async(request,response)=>{
            const productId = request.params.id
        try{
            const product = await productsModal.findById(productId);
            if(product){
                const reviews = await reviewService.getByProductId(productId)
                const avgRatingResponse = await reviewService.getAvgRating(productId)
                const ratingsCountResponse = await reviewService.getRatingCount(productId)
                console.log(ratingsCountResponse)
                response.status(200)
                response.send({
                message:'retrive product successfully',
                data:{...product._doc,reviews,avgRating: parseFloat(avgRatingResponse[0].averageRating).toFixed(1),ratingsCount:ratingsCountResponse}
                })
            }else{
                response.status(404)
                response.send({
                message:' product not found',
                })
            }
         }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrive the product',
                error:error
            })
        }

    }
```
# 27-11-2024 Topic:File Upload
# Multer
* We can use the multer for file uploading
* it a library for uploading the images and files
* we can install the multer
```
npm install multer
```
* products.router.js
```
const express = require('express');
const multer = require('multer')
const router = express.Router();
const productsCtrl = require('../controllers/async-await-products.ctrls')

const storage = multer.diskStorage({
    destination:(request,file,callBackFunc)=>{
        callBackFunc(null,'uploads/')

    },
    filename:(request,file,callBackFunc)=>{
        const formattedFileName = Date.now() + '-' + file.originalname;
        request.body.filename = formattedFileName

        callBackFunc(null,formattedFileName);
    }
})

const upload = multer({storage})


router.get('/pagination',productsCtrl.pagination)
router.get('/:id',productsCtrl.getById)
router.get('/',productsCtrl.getAll)
router.delete('/:id',productsCtrl.delete)
router.post('/',productsCtrl.create)
router.put('/:id',productsCtrl.update)
router.patch('/:id',productsCtrl.patch)

router.post('/upload-image',upload.single('productImage'),productsCtrl.uploadImage)

module.exports =router;
```
* async-await-products.ctrl.js
```
const { response, request } = require("express");
const productsModal = require('../models/product.model');
const reviewService = require("../services/reviews.service");

const productsCtrl={
    // is the code is ASYNC AND AWAIT
    getAll: async(request,response)=>{
        try{
          const products = await productsModal.find()
            response.status(200)
            response.send({
                message:'retrive products successfully',
                data:products
            })
        }catch(error){
            response.status(501)
                response.send({
                    message:'unable to retrive the products',
                    error:error
                })
        }
    },

    getById: async(request,response)=>{
            const productId = request.params.id
        try{
            const product = await productsModal.findById(productId);
            if(product){
                // generate the image URL
                product.imgSrc = request.protocol + '://' +  request.get('host')+'/'+product.imgSrc
                
                const reviews = await reviewService.getByProductId(productId)
                const avgRatingResponse = await reviewService.getAvgRating(productId)
                const ratingsCountResponse = await reviewService.getRatingCount(productId)
                console.log(ratingsCountResponse)
                response.status(200)
                response.send({
                message:'retrive product successfully',
                data:{...product._doc,reviews, avgRating:avgRatingResponse && avgRatingResponse[0].averageRating? parseFloat(avgRatingResponse[0].averageRating).toFixed(1):0,ratingsCount:ratingsCountResponse}
                })
            }else{
                response.status(404)
                response.send({
                message:' product not found',
                })
            }
         }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrive the product',
                error:error
            })
        }

    },



    // to delete a product
    // using async and await
    delete: async(request,response)=>{
        const productId = request.params.id;
        try{
            await productsModal.findByIdAndDelete(productId)
            response.status(200)
            response.send({
                message:'Deleted product successfully'
            })
        }catch(error){
            response.status(500)
            response.send({
                message:'product does not exist'
            })
        }
    },

    // to create product using ASYNC AND AWAIT

    create: async(request,response)=>{
        const product = new productsModal(request.body)
        try{
            const savedProduct = await product.save();
            response.status(200)
            response.send({
                message:"inserted product successfully",
                data:savedProduct
            })
        }catch(error){
             response.status(500)
                response.send({
                    message:'unable to save the product',
                    error:error
                })

        }
    },
    update:async(request,response)=>{
        const productId = request.params.id
        try{
            const savedProduct = await productsModal.findByIdAndUpdate(productId,{$set:request.body},{new:true})
            // const savedProduct = await productsModal.findByIdAndUpdate(request.params.id,{$set:request.body},{new:true})

            response.status(200)
                 response.send({
                    message:'Updated product successfully',
                    data: savedProduct
                    })
        }catch(error){
             response.status(500)
                response.send({
                    message:'unable to Update the product',
                    error:error
                })
                

        } 
        // {new : true} it returns the lastest updates of product
        
       
    },
    patch:async(request,response)=>{
        try{
            const productId = request.params.id
            const product = await productsModal.findById(productId)
            for(let key in request.body){
                    product[key]=request.body[key];
            }

            const savedProduct = await productsModal.findByIdAndUpdate(productId,{$set:product},{new:true})

            response.status(200)
            response.send({
                message:'updated product succesfully',
                data:savedProduct
            })


        }catch(error){
            response.status(500)
            response.send({
                message:'unable to update the product'
            })
        }
    },

    // file upload API

    uploadImage: async(request,response)=>{
       try{
            const productId = request.body.productId
            const product = await productsModal.findById(productId)

            product['imgSrc']= request.body.filename
            const savedProduct = await productsModal.findByIdAndUpdate(productId,{$set:product},{new:true})
            console.log(savedProduct)
            response.status(200)
            response.send({
                message:'updated image succesfully',
                data:savedProduct
            })


        }catch(error){
            console.log(error)
            response.status(500)
            response.send({
                message:'unable to upload image'
            })
        }
    },

    // Pagenation.....

    pagination: async (request,response)=>{
        const {pageIndex,pageSize,order,sortParam} = request.query;
        const orderParam =order === 'asc'? '':'-'
        try{
                const count = await productsModal.countDocuments();
                const roundedCount = Math.ceil(count/pageSize)
            const metadata={
                currentPage:parseInt(pageIndex)+1,
                noOfPages:count/pageSize,
                hasNext: (roundedCount === pageIndex+1),
                hasPrevious:pageIndex > 0
            }
            const products = await productsModal.find()
                                .skip(pageIndex*pageSize)
                                // .sort('discount') // Ascending Order
                                .sort(orderParam+sortParam)
                                .limit(pageSize)
            response.status(200)
            response.send({
                metadata,
                data:products
            })
        }catch(error){
            response.status(500)
            response.send({
                message:'unable to retrieve product',
                error:error
            })
        }
    }
}
module.exports =productsCtrl;
```
* index.js

# 28-11-2024 topic : Cart API'S
# step-1 :
* create a model for carts in model folder
* cart.mdodel.js
```
const mongoose = require('mongoose')
const userModel = require('./user.model')
const productModel = require('./product.model')
const cartSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel
    },
    productId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:productModel
        }
    ]   
})

const cartModel = mongoose.model('carts',cartSchema)
module.exports = cartModel;
```
# step 2 :
* creat a service for carts in services folder
* carts.service,js
```
const { model } = require('mongoose')
const cartModel = require('../models/cart.model')

const cartService = {
    create:(data)=>{
            const cart = new cartModel(data)
            return cart.save()
    },
    fetchById:(userId)=>{
        return cartModel.findOne({userId})
            .populate('userId','firstName lastName')
            .populate('productId','name imgSrc actualPrice discout inStock')
    },
    update: (id,data)=>{
        return cartModel.findByIdAndUpdate(id,{$set:data},{new:true})
    }

}
module.exports = cartService
```
# step 3 :
* create a controller in controllers folder
* cart.ctrl.js
```
const { request, response } = require('express');
const cartService = require('../services/carts.service');
const cartModel = require('../models/cart.model');
const { update } = require('./products.ctrls');

const cartsCtrl = {
    create : async(request,response)=>{
        try{
            const createdCart = await cartService.create(request.body);

            response.status(201)
            response.send({
                data:createdCart,
                message:' Created Cart successfully'
            })
        }catch(error){
            response.status(500)
            response.send({
                error:'unable to Create Cart'
            })
        }
    },
    fetchByUserId: async(request,response)=>{
        try{
            const cartInfo = await cartService.fetchById(request.params.userId);
            response.status(200)
            console.log(cartInfo)
            response.send({
                // data:cartInfo,
                data:{userInfo:cartInfo.userId, productsInfo:cartInfo.productId,_id : cartInfo._id}, //we can also change the variable names
                message:'Retrieve cart Successfully'
            })

        }catch(error){
            response.status(500)
            console.log(error)
            response.send({
                error:'unable to Retrive Cart'
            }) 
        }
    },
    update:async(request,response)=>{
        try{
            const updatedCart = await cartService.update(request.params.id,request.body)
            response.status(200)
            response.send({
                data:updatedCart,
                // data:{userInfo:cartInfo.userId, productsInfo:cartInfo.productId}, we can also change the variable names
                message:'Update cart Successfully'
            })

        }catch(error){
            response.status(500)
            response.send({
                error:'unable to Update Cart'
            }) 
        }
    }

}


module.exports = cartsCtrl
```
# step 4 :
* create router for routing the carts
* in routers folder we can create a router
* carts.router.js
```
const express = require('express')
const cartsCtrl = require('../controllers/carts.ctrl')
const router = express.Router()

router.post('/',cartsCtrl.create)
router.get('/:userId',cartsCtrl.fetchByUserId)
router.put('/:id',cartsCtrl.update)


module.exports = router;
```
# step - 5 : 
* index.js
```
const cartsRouter = require('./routers/carts.router')
app.use('/carts',cartsRouter)
```
# 29-11-2024 Topic : Task : Creation Orders
# 2-11-2024 Topic : Create Orders And CreateOrderId
* order.model.js
```
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    razorpayOrderId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'INR'
    },
    receipt: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'created' // other values could be 'paid', 'failed', etc.
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const orderModel = mongoose.model('orders', orderSchema);

module.exports = orderModel;
```
* we have to install the razorpay generating the orderIds
* install razorpay
```
npm install razorpay
```
* orders.ctrls.js
```
const razorpay = require('razorpay');
const orderService = require('../services/orders.service');
const { response, request } = require('express');

const ordersCtrl ={
    createOrderId:async(request,response)=>{
        try{
            const rptInstance = new razorpay({
                key_id:'rzp_test_Xn1AnKHV457pLJ',
                key_secret:'gryJPWev6ec3A6cnnF23dhik'
            });
            const orderIdInfo = await rptInstance.orders.create({
              amount:request.body.amount,
              currency:'INR',
              receipt:'rel'  
            });
            response.status(201);
            response.send({
                data:orderIdInfo
            });
        }catch(error){
            console.log(error)
            response.status(500);
            response.send({
                message:'Unable to create order Id'
            })
        }
    },
    createOrder:async(request,response)=>{
        try{
            const order = await orderService.create(request.body);
            response.status(201);
            response.send({
                data:order,
                message:'Created the order sucessfully'
            })
        }catch(error){
            console.log(error);
            response.status(500)
            response.send({
                message:'Unable to create order'
            })
        }

    }
}

module.exports = ordersCtrl;
```
* orders.service.js
```
const orderModel = require('../models/order.model')

const orderService = {
    create:(data)=>{
        const order = new orderModel(data)
        return order.save()
    }
}

module.exports = orderService
```
* orders.router.js
```
const express = require('express')
const ordersCtrl = require('../controllers/orders.ctrl')
const router = express.Router()


router.post('/createOrderId', ordersCtrl.createOrderId);
router.post('/', ordersCtrl.createOrder);

module.exports = router;
```
* index.js
```
const ordersRouter = require('./routers/orders.router')
app.use('/orders',ordersRouter)
```











  
