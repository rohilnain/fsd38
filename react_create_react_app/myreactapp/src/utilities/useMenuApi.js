import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

export const useMenuApi=(id)=>{
    useEffect(()=>{
       fetchMenuApiData(id);
    },[]);
    const [menuData,setMenuData]=useState(null);
    async function fetchMenuApiData(id){
        const data=await fetch("http://localhost:5000/api/restaurant/"+id);
        const datajson=await data.json();
        const menuItems=datajson.menuItems;
        console.log(menuItems);
        setMenuData(menuItems);
    }
    return menuData; 
}
