const { response, request } = require('express')
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
    },
    getAllEmployees:async(request,response)=>{
        try{
            const data=await employeeService.getAll(request.body)
            response.status(200).send({
                data:data,
                message:"Retrived employees Successfully!!"
            })

        }catch(error){
            response.status(500).send({
                message:"unable to retrive employees"
            })
        }
    },
    getEmployeeById:async(request,response)=>{
        try{
            const employee = await employeeService.getById(request.params.id)
            console.log('fetching employee : ',employee)
            if(!employee){
                return response.status(404).send({
                    message:"employee Not Found"
                })
            }
            response.status(200).send({
                data:employee,
                message:"Employee Retrived Successfully!!"
            })

        }catch(error){
            response.status(500).send({
                message:"unable to retrive employee"
            }) 
        }
    },
    updateEmployeeById:async(request,response)=>{
        try{
            const employee = await employeeService.updateById(request.params.id,request.body)
            console.log('updatedEmployee:',employee)
            if(!employee){
                return response.status(404).send({
                    message:"employee Not Found"
                })
            }
            response.status(200).send({
                data:employee,
                message:"updated Employee SuccessFully"
            })
        }catch(error){
            console.log(error)
            response.status(500).send({
                message:"unable Update employee"
            }) 
        }
    },
    deleteEmployeeById:async(request,response)=>{
        try{
            employee = await employeeService.deleteById(request.params.id)
            response.status(200).send({
                message:"deleted employee Successsfully!!"
            })

        }catch(error){
            console.log(error)
            response.status(500).send({
                message:"unable to delete employees"
            })
        }
    },
    patch:async(request,response)=>{
        try{
            const {id}=request.params;
            const updatedData = request.body;
            const employee = await employeeService.updateById(id,updatedData)
            response.status(200).send({
                data:employee,
                message:"Updated Specifice fields Successfully!!"
            })


        }catch(error){
            console.log(error)
            response.status(500).send({
                message:"unable to Updated Required Fields"
            })  
        }
    }
}
module.exports = employeeCtrl;