const { Todo } = require("../models");
const validator = require("validator");

//TODO: (For Validation)
//const userController = require("./users");

module.exports = {

    createTodo: async (req, res) => {
        try {
            const todo = req.body;
            if (validationCheck(post, req, res)) {
                const createdTodo = await Todo.create(req.body);
                res.json(createdPost).status(201);
            }
        } catch (err) {
            console.log("===== Error creating todo. DebugCode: 1009 =====");
            console.log(err);
            res.status(500).json({ message: "Error creating the Todo... Internal server error. DebugCode: 1010" });
        }
    },
    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.findAll();
            res.json(todos).status(200);
        } catch (err) {
            console.log("===== Error getting all todos. DebugCode: 1012 =====");
            console.log(err);
            res.status(500).json({ message: "Error getting all todos... Internal server error. DebugCode: 1011" });
        }
    },

    // TODO: (For Validation)
    getUserByEmail: async (req, res) => {
        try {
            res.status(202).json({ message: "getUserByEmail() is not yet implemented. DebugCode: 1014" });
        } catch (err) {
            res.status(500).json({ message: "Error getting user by email... (THIS SHOULD BE IMPOSSIBLE??) Internal server error. DebugCode: 1016" });
        }
    }

    // getUserByEmail: async (req, res) => { }
        
    /*
    // U = update one
    // TODO:
    // D = delete one
    // TODO:
    */
}    

// Validation
function validationCheck(todo, req, res) {

    // Email: required, must be an email
    if (!validator.isEmail(todo.email)) {
        res.status(400).send({ message: "Email must be valid. DebugCode: 1013" });
        return false;
    }

    // TODO: Email: must be unique

    if (getUserByEmail(todo.email)) {
        res.status(400).send({ message: "Email must be unique. DebugCode: 1014" });
        return false;
    }

    // Password: 6-50 characters long
    if (!validator.isLength(todo.password, { min: 6, max: 50 })) {
        res.status(400).send({ message: "Password must be 6-50 characters long. DebugCode: 1014" });
        return false;
    }

}   
