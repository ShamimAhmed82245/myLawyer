const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const router = express.Router();
const mongoose = require("mongoose");
const user = mongoose.model("user");
const jwt = require("jsonwebtoken");

router.post("/Login", (req, res)=>{
    //res.send("this is login page");
    console.log(req.body);
    const{name,memberID,email,password,role,gender,address,phone,chamber,fees}=req.body;
    if(!email||!password||!role){
        return res.status(422).json({error:"please add all the fields."});
    }
    user.findOne({email:email})
        .then( async(savedUser) =>{
            if(savedUser){
                return res.status(422).json({error:"user is already exists."});
            }
            const User = new user({
                name,
                memberID,
                email,
                password,
                role,
                gender,
                address,
                phone,
                chamber,
                fees
            })
            try {
                await User.save();
                return res.send({message: "user is saved successfully."});
            }
            catch (err) {
                console.log('db error',err);
                //return res.status(422).send({error: err.message});
            }
        })
})

module.exports=router;
