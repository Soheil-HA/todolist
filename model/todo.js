const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        // unique: true,
        minLength: 3,
        maxLength: 255
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;