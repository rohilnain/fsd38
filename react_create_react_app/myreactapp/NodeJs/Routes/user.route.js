const userController=require("../Controllers/user.controller");
module.exports=(app)=>{
    app.post("/api/user/register",userController.register);
    app.get("/api/user/login",userController.login)
}