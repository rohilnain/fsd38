const express=require("express");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const restaurantRoutes=require("./Routes/restaurant.route");
const userRoutes=require("./Routes/user.route");



const app=express();

mongoose.connect("mongodb+srv://fsdnode:rohil786@cluster0.p4vcfpj.mongodb.net/?retryWrites=true&w=majority");
const db=mongoose.connection;

db.on("error",()=>{
    console.log("failed connecting with db");
})
db.on("open",()=>{
    console.log("db connected successfullly");
})

//Middleware are js function that act as intermediary to incoming and outgoing requests
//Built In Middleware
app.use(bodyParser.json());

//Application level middleware
function loggedInuser(req,res,next){
    console.log("user has initiated some request");
    next();
}
//app.use(loggedInuser);

//route levelmiddleware
app.get("/",loggedInuser,(req,res)=>{
    res.send("App is Running on port 5000, welcome to express(Node js)");
})

app.listen("5000",()=>{
    console.log("app is running on port 5000");
})

restaurantRoutes(app);
userRoutes(app);