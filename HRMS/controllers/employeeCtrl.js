const { response } = require('express')
const employeeService = require('../services/employeeService')

const employeeCtrl = {
    register:async(request,response)=>{
        try{
            const employee = await employeeService.create(request.body)
            console.log(employee)
            response.status(201).send({
                data:employee,
                message:"registered employee Successfully!!"
            })

        }catch(error){
            response.status(500).send({
                message:"unable to register employee"
            })
        }
    }
}
module.exports = employeeCtrl;