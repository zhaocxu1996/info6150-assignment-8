const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo_id: Number,
    todo_content: String,
    todo_date: Date
});

// todoSchema.index({todo_id: 1});

const todoModel = mongoose.model('todoModel', todoSchema);

module.exports = todoModel;