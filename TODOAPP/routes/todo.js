const express = require("express");
const router = express.Router();

//importing controller
const { createTodo } = require("../controller/createTodo");
const { getTodo, getTodoById } = require("../controller/getTodo");
const { deleteTodo } = require("../controller/deleteTodo");
const { updateTodo } = require("../controller/updateTodo");

//define API routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.delete("/deleteTodo/:id",deleteTodo)
router.put("/updateTodo/:id",updateTodo)

module.exports = router;
