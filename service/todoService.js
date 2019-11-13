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
    find : async function (res) {
        let returnInfo;
        try {
            const todos = await TodoModel.find({});
            console.log(todos);
            returnInfo =JSON.stringify(todos);
            res.end(returnInfo)
        } catch (err) {
            returnInfo = {
                code: 404,
                msg: `failed to find todo`,
                data: `${err}`
            };
            res.end(JSON.stringify(returnInfo));
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
    delete : function(content, res) {
        let returnInfo;
        const filter = {todo_content: content};
        TodoModel.deleteOne(filter, (err, result)=>{
            console.log(err);
            console.log(result);
            //Stringify return message
            let r = JSON.stringify(result);
            if (result.deletedCount==0) {
                returnInfo = {
                    code: 404,
                    msg: `failed to delete todo ${content}`,
                    data: `${r}`
                };
                res.end(JSON.stringify(returnInfo));
            } else {
                returnInfo = {
                    code: 200,
                    msg: `delete ${content} successfully`,
                    data: `${r}`
                };
                res.end(JSON.stringify(returnInfo));
            }
        });
        // let returnInfo;
        // try {
        //     returnInfo = {
        //         code: 200,
        //         msg: `delete successfully`,
        //         data: `delete todo ${content} successfully`
        //     }
        // } catch (err) {
        //     console.log(err);
        //     returnInfo = {
        //         code: 404,
        //         msg: `failed tp delete todo ${content}`,
        //         data: `${err}`
        //     };
        // } finally {
        //     return returnInfo;
        // }
    }
};