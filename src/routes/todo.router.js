const express = require('express');
const todoController = require('../controllers/todo.controller');

const todoRouter = express.Router();

todoRouter.route('/').get(todoController.todoList).post(todoController.createTodo);
todoRouter.route('/:id').get(todoController.toDo).patch(todoController.updateTodo).delete(todoController.deleteTodo);
// todoRouter.put('/:id', todoController.updateTodoWithPut);

module.exports = todoRouter;
