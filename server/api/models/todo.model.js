'use strict'
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        enum: ['to do', 'doing', 'done'],
        default: 'to do',
    },
});

module.exports = mongoose.model('Todo', TodoSchema);
