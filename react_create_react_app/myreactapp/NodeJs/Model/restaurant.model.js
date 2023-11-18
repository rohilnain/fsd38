const mongoose=require("mongoose");

const {Schema,model}=mongoose;

const restaurantSchema=new Schema({
    name:String,
    cuisines:[String],
    deliveryTime:String,
    avgRating:String,
    cloudinaryImageId:String,
    costForTwoString:String
})

const restaurantModel=model("restaurants",restaurantSchema);
module.exports=restaurantModel;