const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employeeCtrl')

router.post('/register',employeeCtrl.register)
router.get('/',employeeCtrl.getAllEmployees)
router.get('/:id',employeeCtrl.getEmployeeById)
router.put('/:id',employeeCtrl.updateEmployeeById)
router.patch('/:id',employeeCtrl.patch)
router.delete('/:id',employeeCtrl.deleteEmployeeById)

module.exports = router;