const Task = require("../../db/config")
const express = require("express")
const router = express.Router()

router.post("/create", verifyToken, async (req, resp) => {
    try {
        const { title, description } = req.body
        const todo = await Task.create({ title, description })
        resp.json(todo)

    } catch (err) {
        return resp.status(500).send({ stats: false, msg: "server error" })

    }
})

router.get("/todoList", verifyToken, async (req, resp) => {
    try {
        let todo = await Task.findAll();

        if (products.length > 0) {
            resp.send(todo)
        } else {
            resp.send({ result: "No to do task available" })
        }
    } catch (err) {
        return resp.status(500).send({ stats: false, msg: "server error" })
    }
})

router.delete("/delete/:id", verifyToken, async (req, resp) => {

    try {
        const todo = await Task.findOne({ where: { id: req.params.id } });
        if (!todo) {
            resp.send("task not found")
        }
        await todo.destroy()

        resp.send("deleted successfully");
    } catch (err) {
        return resp.status(500).send({ stats: false, msg: "server error" })
    }

})

router.get("/product/:id", verifyToken, async (req, resp) => {
    try {
        let result = await Product.findOne({ where: { id: req.params.id } });
        if (result) {
            resp.send(result);
        } else {
            resp.send({ result: "no record found" })
        }
    } catch (err) {
        return resp.status(500).send({ stats: false, msg: "server error" })
    }
});

router.put("/product/:id", verifyToken, async (req, resp) => {
    try {
        const todo = await Task.findOne({ where: { id: req.params.id } })
        if (!todo) {
            resp.send("todo not found")
        }

        const { title, description, status } = req.body
        todo.title = title || todo.title;
        todo.description = description || todo.description
        todo.status = status || todo.status
        await todo.save()
    } catch (err) {
        return resp.status(500).send({stats:false,msg:"server error"})
    }
});



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


module.exports = { router }

