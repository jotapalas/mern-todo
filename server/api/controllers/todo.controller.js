'use strict'
require('../models/todo.model')
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

module.exports = {
    getAllTodos: function (req, res) {
        Todo.find({}, function (err, todos) {
            err ? res.status(400).send(err) : res.json(todos);
        });
    },

    insertTodo: function (req, res) {
        const todo = new Todo(req.body);
        todo.save(function (err, todo) {
            err ? res.status(400).send(err) : res.status(201).json(todo);
        });
    },

    updateTodo: function (req, res) {
        const todoId = req.params.todoId;
        Todo.findOneAndUpdate(
            {_id: todoId},
            req.body,
            {new: true},
            function (err, todo) {
                err ? res.status(400).send(err) : res.json(todo);
            }
        );
    },

    deleteTodo: function (req, res) {
        const todoId = req.params.todoId;
        Todo.deleteOne({_id: todoId}, function (err, todo) {
            err ? res.status(400).send(err) : res.status(200).send()
        });
    }
};
