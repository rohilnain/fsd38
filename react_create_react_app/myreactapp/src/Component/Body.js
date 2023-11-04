import RestaurantCard from "./RestaurantCard";
import Searchbar from "./Searchbar";
import { restaurantsdetails } from "../utilities/restaurantsdetail";
import {useState,useEffect} from 'react';
import Shimmer from "./Shimmer";
import { Restaurant_API } from "../utilities/constants";
function Body(){
    const [filteredrestaurant,setfileteredrestaurant]=useState(restaurantsdetails);
    useEffect(()=>{
        fetchRestuarantDetails();
    },[]);
    async function fetchRestuarantDetails()
    {
        try{
        var data=await fetch(Restaurant_API)
        var datajson=await data.json();
        var restaurants=datajson?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurants);
        //setfileteredrestaurant(restaurants)
        setfileteredrestaurant(restaurants);
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
        filteredrestaurant==undefined? <Shimmer/>:
            filteredrestaurant.map((restaurant)=>{
                return <RestaurantCard key={restaurant.info.id} details={restaurant.info} />
            })
        }
        </div>
        </div>
    )
};

export default Body;