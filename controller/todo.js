//This is todo items controller
const TodoService = require('../service/todoService');

class todo {
    //fetch controller
    async fetch(req, res, next) {
        let id = req.body.id;
        console.log(id);
        const output = await TodoService.find(id);
        console.log(output);
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(output));
    }
    //add controller
    async add(req, res, next) {
        let content = req.body.content;
        let resInfo = TodoService.create(content);
        res.statusCode = resInfo.code;
        let output = {
            message: resInfo.msg,
            data: resInfo.data
        }
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(output));
    }
    //update controller
    async update(req, res, next) {
        let id = req.body.id;
        let content = req.body.content;
        let resInfo = TodoService.update(id, content);
        console.log(resInfo)
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(resInfo));
    }
    //delete controller
    async delete(req, res, next) {
        let id = req.body.id;
        let resInfo = TodoService.delete(id);
        res.statusCode = resInfo.code;
        let output = {
            message: resInfo.msg,
            data: resInfo.data
        }
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(output));
    }
}

module.exports = new todo();