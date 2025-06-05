const { response, request } = require("express");

const employees= [
            {
                id:1,
                name:'Sewagh',
                salary:35000,
                role:'software engineer'
            },
            {
                id:2,
                name:'Ravi',
                salary:35000,
                role:'software engineer'
            },
        ]
const employeeCtrls = {
    getAll:(request,response)=>{
        response.send({employees:employees});
    },
    create:(request,response)=>{
        employees.push(request.body)
        respond.send('employee posted successfully')
    },
    delete:(request,response)=>{
        const index = employees.findIndex(employee =>employee.id == request.params.id)
        employees.splice(index,1)
        response.send({message:"Deleted employee successfully"})
    },

    getById:(request,response)=>{
        const filterdEmployee = employees.find(employee => employee.id === parseInt(request.params.is))
        if (filterdEmployee){
            response.send(filterdEmployee)
        }else{{
            message:"unable to find the employee"
        }}

    }
    
}
module.exports = employeeCtrls;