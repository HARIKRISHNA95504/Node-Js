const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employees.ctrls')
const { route } = require('./users.router')

router.get('/:id',employeeCtrl.getById)
router.get('/',employeeCtrl.getAll)
router.delete('/:id',employeeCtrl.delete)
router.post('/',employeeCtrl.create)