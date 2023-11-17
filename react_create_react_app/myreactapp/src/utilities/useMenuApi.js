import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

export const useMenuApi=(id)=>{
    useEffect(()=>{
       fetchMenuApiData(id);
    },[]);
    const [menuData,setMenuData]=useState(null);
    async function fetchMenuApiData(id){
        const data=await fetch(MENU_API+id);
        const datajson=await data.json();
        setMenuData(datajson);
    }
    return menuData; 
}
