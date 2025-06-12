const express = require('express');
const router = express.Router();

//import the productsCtrls
// const productsCtrl = require('../controllers/products.ctrls')

const productsCtrl = require('../controllers/async-await-products.ctrls')

router.get('/:id',productsCtrl.getById)
router.get('/',productsCtrl.getAll)
router.delete('/:id',productsCtrl.delete)
router.post('/',productsCtrl.create)
router.put('/:id',productsCtrl.update)
router.patch('/:id',productsCtrl.patch)

module.exports =router;