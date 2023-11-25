const mongoose=require("mongoose");
const userModel=require("../Model/user.model");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

exports.register=(req,res)=>{
    const{name,email,password}=req.body;
    if(!name||!email||!password) return res.status(404).send("please fill all user login fields");
    const newUser=new userModel({
        name,
        email,
        password:bcrypt.hashSync(password,10)
    })
    userModel.findOne({email}).then((data)=>{
        if(data && data.length>0) return res.status(400).send("user already registered");
        else{
            newUser.save().then((data)=>{
                if(!data) return res.status(404).send("something went wrong user not registered");
                else return res.send(data);
            }).catch((error)=>{
                return res.status(500).send("server not available");
            })
        }
    }).catch((error)=>{
        return res.status(500).send("server not available");
    })
}


exports.login=(req,res)=>{
    const{email,password}=req.body;
    userModel.findOne({email}).then((data)=>{
        if(data){
            const encryptedPassword=data.password;
            const isvalidPassword=bcrypt.compareSync(password,encryptedPassword);
            if(!isvalidPassword){
                return res.status(401)
                .send("Invalid Password. Please enter correct password");
            }
            else{
                const accessToken=jwt.sign({id:data._id},"secretkeyfsd38",{expiresIn:"1h"});
                return res.send({
                    user:{
                        name:data.name,
                        email:data.email
                    },
                    token:accessToken
                }
                )
            }
        }
        else return res.status(400).send("user not registered yet please register first");
    }).catch((error)=>{
        return res.status(500).send("server not available");
    })
}