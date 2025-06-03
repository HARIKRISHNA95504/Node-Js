const employeeCtrls = {
    getAll:(request,response)=>{
        response.send({
            status:'Retrieve successfully',
            employee:[
            {
                name:'Sewagh',
                salary:35000,
                role:'software engineer'
            },
            {
                name:'Ravi',
                salary:35000,
                role:'software engineer'
            },
        ]
        })
    }
}
module.exports = employeeCtrls;