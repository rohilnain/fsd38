const restaurantModel=require("../Model/restaurant.model");
exports.create=(req,res)=>{
    console.log("request body",req.body);
    const {name,cuisines,cloudinaryImageId,deliveryTime,avgRating,costForTwoString,menuItems}=req.body;
    const newRestaurant=new restaurantModel({
        name,
        cuisines,
        deliveryTime,
        avgRating,
        cloudinaryImageId,
        costForTwoString,
        menuItems
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


exports.read=(req,res)=>{
    restaurantModel.find({}).then((data)=>{
        if(!data) res.status(404).send("restaurants data not found");
        else res.send(data);
    }).catch((error)=>{
        res.status(500).json({message:"server not found"});
    })
}

exports.readOne=(req,res)=>{
    const id=req.params.id;
    restaurantModel.findById(id).then((data)=>{
        if(!data) res.status(404).send("restaurant data not found");
        else res.send(data);
    }).catch((error)=>{
        res.status(500).send("server not available");
    })
}

exports.update=(req,res)=>{
    const id=req.params.id;
    restaurantModel.findByIdAndUpdate(id,{avgRating:"4.0"}).then((data)=>{
        if(!data) res.status(404).send("restaurant cannot be updated as data is not found");
        else res.send(data);
    }).catch((error)=>{
        res.status(500).send("server not found");
    })
}

exports.deleteOne=(req,res)=>{
    const id=req.params.id;
    restaurantModel.findByIdAndDelete({_id:id}).then((data)=>{
        if(!data) res.status(404)/send("restaurant cannnot be delted as restaurant is not found");
        else res.send(data);
    }).catch((error)=>{
        res.status(500).send("server not available");
    })
}