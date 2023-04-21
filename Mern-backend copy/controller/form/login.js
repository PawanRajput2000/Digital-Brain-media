const {User} = require("../../db")
const jwtKey = 'token';
const express = require("express")
const router = express.Router()

router.post("/login" , async(req,resp)=>{
    if(req.body.password && req.body.email){
        let user =await  User.findOne({where:{email}})
        if(user){
            Jwt.sign({user},jwtKey,(err,token)=>{
                   if(err){
                    resp.send({result:"something went wrong , please try after sometimes"})
                   }
                resp.send({user , auth:token})
            })
           
        }
        else{
            resp.send({result:"No user found"})
        }
    }else{
        resp.send({result:"No user found"})
    }

})


module.exports={router}