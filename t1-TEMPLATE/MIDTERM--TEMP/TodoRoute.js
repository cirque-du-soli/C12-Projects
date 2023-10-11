const express = require("express");
const router = express.Router();
const { Todo, User } = require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");


// GET ALL TODOS BY USER
router.get("/api/getAllByOwner/:id", validateToken, async (req, res) => {
    
    const listAllTodos = await Todo.findAll({
        where: { ownerId: req.params.id },
        include: [{model: User, attributes:['name'], as : 'owner'}]
    });

    res.json(listAllTodos);
}); //FIXME: Handle errors!!!

/*
// CREATE ONE
router.post("/api/action", validateToken, async (req, res) => {
    const newTodo = req.body;
    await Todo.create(newTodo);
    res.json(newTodo);
});//FIXME: Handle errors!!!

// UPDATE ONE
router.put("/api/action/:id", validateToken, async (req, res) => {
    const id = req.params.id;
    const todo = req.body;
    await Todo.update(todo, {
        where: {
            id: id
        }
    });
    res.json(todo);
});//FIXME: Handle errors!!!

// DELETE ONE
router.delete("/api/action/:id", validateToken, async (req, res) => {
    const id = req.params.id;
    await Todo.destroy({
        where: {
            id: id
        }
    });
    res.json("DELETED SUCCESSFULLY");
});//FIXME: Handle errors!!!


*/
