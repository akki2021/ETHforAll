const express = require("express");


const router=express.Router();
//model


router.get('/login',(req,res)=>res.send('login'));

router.get('/register',(req,res)=>res.send('register'));

//register handle


module.exports=router;