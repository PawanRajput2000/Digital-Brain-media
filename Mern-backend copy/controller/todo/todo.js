const Task = require("../../db/config")
const express = require("express")
const route = express.Router()

const create =  async (req, resp) => {
    try {
        const { title, description } = req.body
        const todo = await Task.create({ title, description })
        resp.json(todo)

    } catch (err) {
        return resp.status(500).send({ stats: false, msg: "server error" })

    }
}

const getTodo =  async (req, resp) => {
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
}

const   deleteTodo =  async (req, resp) => {

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

}



const update =  async (req, resp) => {
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
};


module.exports = { create,update,deleteTodo,getTodo }

