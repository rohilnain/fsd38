const mongoose=require("mongoose");

const {Schema,model}=mongoose;

const userSchema=new Schema({
    name:String,
    email:String,
    password:String
})

const userModel=model("users",userSchema);
module.exports= userModel;