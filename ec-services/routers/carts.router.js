const express = require('express')
const cartsCtrl = require('../controllers/carts.ctrl')
const router = express.Router()

router.post('/',cartsCtrl.create)
router.get('/:userId',cartsCtrl.fetchByUserId)
router.put('/:id',cartsCtrl.update)


module.exports = router;