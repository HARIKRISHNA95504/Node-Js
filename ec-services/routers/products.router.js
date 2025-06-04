const express = require('express');
const router = express.Router();

//import the productsCtrls
const productsCtrl = require('../controllers/products.ctrls')

router.get('/:id',productsCtrl.getById)
router.get('/',productsCtrl.getAll)
router.delete('/:id',productsCtrl.delete)
router.post('/',productsCtrl.create)
router.put('/:id',productsCtrl.update)

module.exports =router;