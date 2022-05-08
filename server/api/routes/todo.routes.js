'use strict'
const express = require('express');
const routes = express.Router();
const todo = require('../controllers/todo.controller')

routes.route('/')
    .get(todo.getAllTodos)
    .post(todo.insertTodo)
;

routes.route('/:todoId')
    .put(todo.updateTodo)
    .delete(todo.deleteTodo)
;

module.exports = routes;
