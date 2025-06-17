const express = require('express');
const multer = require('multer')
const router = express.Router();

//import the productsCtrls
// const productsCtrl = require('../controllers/products.ctrls')

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