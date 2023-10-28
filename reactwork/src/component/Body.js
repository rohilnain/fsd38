import RestaurantCard from "./RestaurantCard";
import Searchbar from "./Searchbar";
import restaurantsdetails from "../utilities/restaurantsdetail";

function Body(){
    return(
        <div className='flex flex-col'>
        <Searchbar/>
        <div className='flex flex-wrap justify-center '>
        {
            restaurantsdetails.map((restaurants)=>{
                return <RestaurantCard key={restaurants.id} details={restaurants} />
            })
        }
        </div>
        </div>
    )
};

export default Body;