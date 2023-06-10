const express = require("express");
const router = express.Router();
const users = require("../Models/userSchema");
const nodemailer = require('nodemailer');
const cors = require("cors")





const transporter  = nodemailer.createTransport({
        server : "gmail",
        auth : {
          user : process.env.Email,
          pass : process.env.Pass
        } 
   

 })

router.post("/register",async(req,res)=>{
   //  const {fname,lname,email,mobile,message} = req.body;
         console.log(req.body);
       

})

module.exports = router;