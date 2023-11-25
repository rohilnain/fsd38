const restaurantController=require("../Controllers/restaurant.controller");
const verifyToken=require("../Middleware/verifyToken");

module.exports=(app)=>{
    app.post("/api/restaurant",restaurantController.create);
    app.get("/api/restaurant",restaurantController.read);
    app.get("/api/restaurant/:id",verifyToken,restaurantController.readOne);
    app.put("/api/restaurant/:id",restaurantController.update);
    app.delete("/api/restaurant/:id",restaurantController.deleteOne);
}