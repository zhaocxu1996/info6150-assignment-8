const express = require('express');
const db = require('./config/db');
const router = require('./routes/routeapp');
const bodyParser = require('body-parser')
const app = express();

//connect database
db.connect();
//enable request.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//route
router(app);
//listen
app.listen('3000');
console.log("Server is listening on port 3000");
