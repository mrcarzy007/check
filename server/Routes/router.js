const express = require("express");
const router = express.Router();
const users = require("../Models/userSchema");
const nodemailer = require("nodemailer");


// email config 

const transporter = nodemailer.createTransport({
    service : "gmail",
     auth : {
        user :  process.env.Email ,
        password : process.env.Pass
     }
});

router.post("/register", async(req,res)=>{
    const {fname,lname,email,mobile,message} = req.body
            if(!fname || !lname || !email || !mobile)
            {
              res.status(401).json({status : 401 , error:"All Input required"}) 
            }
         try {
            const preuser = await users.findOne({email:email})
                    
             if(preuser){
                 console.log("already exists")
             }else{
                 const finalUser = new users({
                     fname,lname,email,mobile,message
                 });
                 const storeData = await finalUser.save();
                  const mailOptions  = {
                     from:process.env.Email,
                      to:email,
                      subject:"thanx for the Query",
                       text : "Your Responce Has been Submitted"
                  }
                  transporter.sendMail(mailOptions,(error,info)=>{
                     if(error){f
                        console.log("error" + error)
                     }else {
                        console.log("Error send" + info.response);
                        res.status(201).json({status:201,message:"email send Successfully "})
                    }
                  })
                  res.status(201).json({status:201,storeData})

             } 

         } catch (error) {
            res.status(401).json({status:401,error:"All Input required"});
            console.log("Catch error")
         }
   
   })










module.exports = router;