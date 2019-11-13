const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/hw8'

exports.connect = () => {
    mongoose.connect(dbUrl, (err) => {
        if(err){
          console.log(`connect database failed`);
        }else{
          console.log(`connect database successfully`);
        }
    })
}