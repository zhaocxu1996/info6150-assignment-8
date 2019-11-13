const TodoModel = require('../model/todo');
const time = require('time-formater');

module.exports = {
    // create todo service
    create : function (content) {
        let returnInfo;
        try {
            let todo = {
                todo_content: content,
                todo_date: time().format('HH:mm MM/DD/YYYY')
            };
            TodoModel.create(todo);
            returnInfo = {
                code: 200,
                msg: 'create successfully',
                data: 'succeed'
            };
        } catch (err) {
            returnInfo = {
                code: 404,
                msg: 'create failed',
                data: `${err}`
            };
        } finally {
            return returnInfo;
        }
    },
    //fetch todo service
    find : async function (id) {
        let returnInfo;
        try {
            const todo = await TodoModel.findOne({'_id': id});
            console.log(todo);
            returnInfo = {
                code: '200',
                msg: `find todo ${id}`,
                data: todo
            };
        } catch (err) {
            returnInfo = {
                code: 404,
                msg: `failed to find todo ${id}`,
                data: `${err}`
            };
        } finally {
            return returnInfo;
        }
    },
    //update todo service
    update : function(id, content) {
        let returnInfo;
        let todo = {
            todo_content: content,
            todo_date: time().format('HH:mm MM/DD/YYYY')
        };
        try {
            TodoModel.update({'_id': id}, todo);
            returnInfo = {
                code: '200',
                msg: `update successfully`,
                data: `update todo ${id} successfully`
            };
        } catch (err) {
            returnInfo = {
                code: 404,
                msg: `failed to update todo ${id}`,
                data: `${err}`
            };
        } finally {
            return returnInfo;
        }
    },
    //delete todo service
    delete : function(id) {
        let returnInfo;
        try {
            TodoModel.deleteOne({'_id': id});
            returnInfo = {
                code: 200,
                msg: `delete successfully`,
                data: `delete todo ${id} successfully`
            }
        } catch (err) {
            returnInfo = {
                code: 404,
                msg: `failed tp delete todo ${id}`,
                data: `${err}`
            };
        } finally {
            return returnInfo;
        }
    }
};