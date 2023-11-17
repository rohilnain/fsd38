import { useState } from "react";
import { restaurantsdetails } from "../utilities/restaurantsdetail";
function Searchbar(props){

    const [inputText,setInputText]=useState("");
    const searchText=(searchText)=>
    {
        setInputText(searchText);
    }
    const filterRestaurant=()=>{
        var restaurantsList=props.filteredrestaurant.filter(restaurant=>{return restaurant.info.name.toLowerCase()
            .includes(inputText.toLowerCase())});
        props.setfileteredrestaurant(restaurantsList);
    }
    const filtertopRestaurant=()=>{
        var restaurantsList=props.filteredrestaurant.slice().sort((a, b) => parseFloat(b.info.avgRating) - parseFloat(a.info.avgRating));
        props.setfileteredrestaurant(restaurantsList);
    }
    return(
        <>  
            <div className="flex m-2 w-full">
                <div className=" width-90">
                <label htmlfor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 
                    rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:bg-orange-100
                     dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500
                      dark:focus:border-blue-500" placeholder="Search Restaurants, Food..." required
                      onChange={(e)=>searchText(e.target.value)}></input>
                    <button type="button" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2
                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     onClick={filterRestaurant}>Search</button>
                </div>
                </div>
                <div className=" m-2 width-10">
                <button type="button" className="text-white relative bg-blue-700 hover:bg-blue-800 
                    focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm px-4 py-2
                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     onClick={filtertopRestaurant}>Top Rated</button>
                </div>
              </div>
     </>
    );
};

export default Searchbar;

// Hooks are functions provided by React that allow functional components to use state and other React features without writing a class. 
//They are JavaScript functions that provide a way to use state and other React features in functional components. 
//Some common built-in hooks provided by React include useState, useEffect, useContext, and useReducer, among others.

// On the other hand, state is an object that represents the data a component needs to render and handle user interactions.
// In class components, state is managed using the this.state object. It can be initialized in the constructor 
//and updated using this.setState({...}), which triggers a re-render of the component.

// In functional components, the useState hook allows you to add state to functional components. 
//It returns a pair of values: the current state and a function that lets you update it.
//By calling this function, you can update the state and trigger a re-render of the component.

// In summary, hooks are JavaScript functions provided by React that allow functional components to 
//use state and other React features, while state is a concept that represents the data a component
// needs to manage. Hooks, particularly useState, provide a way to manage state in functional components 
//similarly to how it is managed in class components.