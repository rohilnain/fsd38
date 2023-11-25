import RestaurantCard from "./RestaurantCard";
import Searchbar from "./Searchbar";
import {useState,useEffect} from 'react';
import Shimmer from "./Shimmer";
import { Restaurant_API } from "../utilities/constants";
function Body(){
    const [filteredrestaurant,setfileteredrestaurant]=useState(null);
    useEffect(()=>{
        fetchRestuarantDetails();
    },[]);
    async function fetchRestuarantDetails()
    {
        try{
        const data=await fetch("http://localhost:5000/api/restaurant");
        const datajson=await data.json();
        // {
        // //using swiggy api
        // const data=await fetch(Restaurant_API)
        // const datajson=await data.json();
        // const tempdata=datajson?.data;
        // // var restaurantsList;
        // // for(var i in tempdata){
        // // if(!restaurantsList) restaurantsList=i?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // // }
        //  var restaurantsList=datajson?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //  if(!restaurantsList) restaurantsList=datajson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(restaurantsList);
        // if (restaurantsList) {
        //     setfileteredrestaurant(restaurantsList);
        // } else {
        //     console.error("Invalid data structure:", datajson);
        // }
        // }
        console.log(datajson);
        setfileteredrestaurant(datajson);
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <div className='flex flex-col'>
        <Searchbar  filteredrestaurant={filteredrestaurant} setfileteredrestaurant={setfileteredrestaurant}/>
        <div className='flex flex-wrap justify-center w-full '>
        {
        filteredrestaurant==null? <Shimmer/>:
            filteredrestaurant.map((restaurant)=>{
                return restaurant._id ?(<RestaurantCard key={restaurant._id} details={restaurant} />):null;
            })
        }
        </div>
        </div>
    )
};

export default Body;