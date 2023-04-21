const express = require("express")
const route = express.Router()

const {login} = require("../controller/form/login")
const {register} = require("../controller/form/register")

const {create,getTodo,deleteTodo,update} = require("../controller/todo/todo")
route.post("/create", verifyToken,create )

route.get("/todoList", verifyToken,getTodo)
route.delete("/delete/:id", verifyToken,deleteTodo)
route.put("/todoUpdate/:id", verifyToken,update)
route.post("/register",register)
route.post("/login" ,login)




function verifyToken(req, resp, next) {
    try { let token = req.headers['authorization'];
      if (token) {
          token = token.split('')[1];
          Jwt.verify(token, jwtKey, (err, valid) => {
              if (err) {
                  resp.status(401).send({ result: "please provide valid token" })
              } else {
                  next();
              }
  
          })
  
      } else {
          resp.status(403).send({ result: "please add token with header" })
      }}catch(err){
          return resp.status(500).send({stats:false,msg:"server error"})
      }
  
  }





module.exports = route