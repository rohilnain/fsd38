const restaurantController=require("../Controllers/restaurant.controller");

module.exports=(app)=>{
    app.post("/api/restaurant",restaurantController.create);
}