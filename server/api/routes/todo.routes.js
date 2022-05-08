'use strict'
const express = require('express');
const routes = express.Router();
const todo = require('../controllers/todo.controller')

routes.route('/')
    .get(function (req, res) {
        todo.getAllTodos(req, res)
    })
    .post(function (req, res) {
        todo.insertTodo(req, res)
    })
;

module.exports = routes;
