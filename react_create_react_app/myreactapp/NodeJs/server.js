const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const routes=require("./Routes/restaurant.route");



const app=express();

mongoose.connect("mongodb+srv://fsdnode:rohil786@cluster0.p4vcfpj.mongodb.net/?retryWrites=true&w=majority");
const db=mongoose.connection;

db.on("error",()=>{
    console.log("failed connecting with db");
})
db.on("open",()=>{
    console.log("db connected successfullly");
})

app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.send("App is Running on port 5000, welcome to express(Node js)");
})

app.listen("5000",()=>{
    console.log("app is running on port 5000");
})

routes(app);