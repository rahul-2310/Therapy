const mongoose = require('mongoose');

let TherapySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    // lastName:{
    //     type:String,
    //     required:true
    // },
    dateOfBirth:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    emailAddress:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
})

let Therapy1 = mongoose.model('Therapy',TherapySchema);
module.exports =Therapy1;