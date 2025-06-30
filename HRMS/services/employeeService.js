const employeeModel = require('../models/EmployeeModel')

const employeeService = {
 create:async(data)=>{
    const employee = new employeeModel(data);
    return await employee.save();
 },
 getAll:async()=>{
   return  employeeModel.find()
 },
 getById:async(id)=>{
   return employeeModel.findById(id)
 },
 updateById:async(id,data)=>{
   return employeeModel.findByIdAndUpdate(id,{$set:data},{new:true})
 },
 deleteById:async(id)=>{
   return  employeeModel.findByIdAndDelete(id)
 }
}

module.exports = employeeService;