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
                data: 'failed'
            };
        } finally {
            return returnInfo;
        }
    },
    //fetch todo service
    find : function (id, resInfo) {
        TodoModel.findById(id, (err, ret) => {
            if (err) {
                resInfo = {
                    code: '404',
                    msg: `cannot find todo ${id}`,
                    data: `${ret}`
                };
            } else {
                resInfo = {
                    code: '200',
                    msg: `find todo ${id} successfully`,
                    data: `${ret}`
                };
            }
        });
    },
    //update todo service
    update : function(id, content) {
        let returnInfo;
        let todo = {
            todo_content: content,
            todo_date: time().format('HH:mm MM/DD/YYYY')
        };
        TodoModel.findByIdAndUpdate(id, todo, (err, ret) => {
            if (err) {
                returnInfo = {
                    code: 404,
                    msg: `cannot update todo ${id}`,
                    data: ret
                };
            } else {
                returnInfo = {
                    code: 200,
                    msg: `update todo ${id} successfully`,
                    data: ret
                }
            }
        })
        return returnInfo;
    },
    //delete todo service
    delete : function(id) {
        let returnInfo;
        TodoModel.findByIdAndDelete(id, (err, ret) => {
            if (err) {
                returnInfo = {
                    code: 404,
                    msg: `cannot delete todo ${id}`,
                    data: ret
                };
            } else {
                returnInfo = {
                    code: 200,
                    msg: `delete todo ${id} successfully`,
                    data: ret
                }
            }
        })
        return returnInfo;
    }
};