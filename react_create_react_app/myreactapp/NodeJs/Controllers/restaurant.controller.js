const restaurantModel=require("../Model/restaurant.model");
exports.create=(req,res)=>{
    console.log("request body",req.body);
    const {name,cuisines,cloudinaryImageId,deliveryTime,avgRating,costForTwoString}=req.body;
    const newRestaurant=new restaurantModel({
        name,
        cuisines,
        deliveryTime,
        avgRating,
        cloudinaryImageId,
        costForTwoString
    })
     newRestaurant.save()
    .then((data)=>{
        if(!data){
            return res.status(400).send("something went wrong while writing data to database");
        }
        else{
            return res.send(data);
        }
    })
    .catch((error)=>{
        return res.status(500).json({message:"error occured while saving data server failed"});
    })
}