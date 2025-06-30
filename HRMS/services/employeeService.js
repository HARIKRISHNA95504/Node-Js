const employeeModel = require('../models/EmployeeModel')

const employeeService = {
 create:async(data)=>{
    const employee = new employeeModel(data);
    return await employee.save();
 }
}

module.exports = employeeService;