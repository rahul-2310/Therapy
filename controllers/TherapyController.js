const express = require('express')
const Therapy = require('../models/therapy.model')
const router = express.Router();

router.get('/therapy',(req,res) =>{
    res.render('index');
})

router.get('/signin',(req,res) =>{
    res.render('./Sign-In');
})
router.post('/createuser',(req,res) =>{
    const {fullname,dob,gender,mobile,email,password,cp,photo} = req.body;
    console.log(req.body);
    // const Therapy1 = new Therapy({name:fullname,dateofbirth:dob,gender:gender,mobilenumber:mobile,emailaddress:email,password:password,confirmpassword:cp});
    // Therapy1.save((err,result)=>{
    //     if(err) console.log(err);
    //     console.log(result)
    //     // res.send(result);
    // })
})

router.get('/login',(req,res) =>{
    res.render('./Login');
})

module.exports = router;