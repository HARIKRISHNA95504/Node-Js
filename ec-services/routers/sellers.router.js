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