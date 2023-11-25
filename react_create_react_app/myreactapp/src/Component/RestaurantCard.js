import { Link } from "react-router-dom";

import { CDN_IMG_URL } from "../utilities/constants";
 function RestaurantCard(props){
    
    const { name, cuisines, avgRating,deliveryTime,cloudinaryImageId } =props.details;
    return(
            <Link to={`/restaurantmenu/${props.details._id}`}>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-orange-100
                dark:border-gray-700 m-2">
                <a href="#">
                    <img class="rounded-t-lg" src={`${CDN_IMG_URL}${cloudinaryImageId}`} alt="Restaurant Image" />
                </a>
                <div class="p-5">
                        <div className='flex justify-between m:2'>
                            <h3>{name}</h3>
                            <h4>{avgRating}</h4>
                        </div>
                        <div className='flex justify-between  m:2'>
                            <h4>{cuisines[0]} {cuisines[1]} ..</h4>
                            <h4>300</h4>
                        </div>
                        <div className='flex justify-between m:2'>
                            <h4>Contact less delivery</h4>
                            <h4>{deliveryTime} min</h4>
                        </div>
                        <div className="openmenu">
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white
                            bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
                            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
                                Open Menu
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                            </a>
                        </div>
                    </div>   
                </div>
                </Link>
    );
}

export default RestaurantCard;