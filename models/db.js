const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://localhost:27017/TherapyApp',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err) console.log('Error occured'+err);
    else console.log('Connection setup');
})

module.exports = db;