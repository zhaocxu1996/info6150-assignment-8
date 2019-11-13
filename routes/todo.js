const express = require('express');
const router = express.Router();
const Todo = require('../controller/todo');

//4 routes of controllers
router.get('/fetch', Todo.fetch);
router.post('/add', Todo.add);
router.put('/update', Todo.update);
router.delete('/delete', Todo.delete);

module.exports = router;