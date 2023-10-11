const express = require("express");
const router = express.Router();
const controller = require("../controllers/todos");

// TODO: Add RegEx to id in urls!!!

// C = create one
router.post("/api/actions/", controller.createTodo);

// R =  get all
router.get("/", controller.getAllTodos);

// U = update one
//router.put("/api/actions/:id", controller.updateTodo);

// D = delete one
//router.delete("/api/actions/:id", controller.deleteTodo);

module.exports = router;




