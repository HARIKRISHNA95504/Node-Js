
const express = require('express');
const router = express.Router();
const tokenValidator = require('../middlewares/token-validation')

//import the productsCtrls
const reviewsCtrl = require('../controllers/reviews.ctrl')


router.post('/',tokenValidator,reviewsCtrl.create)


module.exports =router;