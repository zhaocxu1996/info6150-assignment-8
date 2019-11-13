// This is the entrance route of app - main route
const todo = require('./todo')

module.exports = app => {
    //functional child route
    app.use('/todo', todo)
}