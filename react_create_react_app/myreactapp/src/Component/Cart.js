import { useSelector } from "react-redux"
export const Cart=()=>{
    const countItems=useSelector((state)=>state.cart.countItems);
    return(
        <>
        This cart has {countItems} items
        </>
    )

}