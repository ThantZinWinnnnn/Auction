
const prisma = require('../../prisma/index')

const cookieParser = require("../../token/cookieToken")

//user signup

exports.singUp = async(req,res)=>{
    try {
        const {name,email,password} = req.body

        if(!name || !email || !password){
            res.status(400).send({message:"please provide all fields"})
        }

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password
            }
        })
        cookieParser(user)
        console.log(user)
    } catch (err) {
        res.status(400).send({message:"Please provide valid fields"})
    }
}