const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employeeCtrl')

router.post('/register',employeeCtrl.register)

module.exports = router;