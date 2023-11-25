import { useParams } from "react-router-dom";
import { useMenuApi } from "../utilities/useMenuApi";
import Shimmer from "./Shimmer";
import { CDN_IMG_URL } from "../utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,deleteFromCart } from "../utilities/reducers.js/cartReducer";

const RestaurantMenu=()=>{
        const countItems=useSelector((state)=>state.cart.countItems);
        const cartItems=useSelector((state)=>state.cart.cartItems);
        const dispatch=useDispatch();
        const {id}=useParams();
        var menu_data=useMenuApi(id);
        console.log("menu_data", menu_data);
        if (menu_data === null) return <Shimmer />;
        var itemCards =menu_data;
        // menu_data?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        //     ?.card?.card?.itemCards;
        // if(!itemCards) itemCards =
        // menu_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        //     ?.card?.card?.itemCards;
        // console.log("itemsCards", itemCards);    
        if(!itemCards) return <Shimmer />;
        const setCartItem=(item)=>{
            dispatch(addToCart(item));
        }
        const removeCartItem=(item)=>{
            const index=cartItems.indexOf(item);
            dispatch(deleteFromCart(index))
        }
        return(
                <div className="flex text-center dark:bg-orange-100 w-full ">
                  <div className="rest-menu-list">
                    {itemCards.map((item) => (
                      <div
                        data-testid="foodItems"
                        //key={item.id}
                        className="p-2 m-2 border-gray-200  border-t-2 text-left flex justify-between"
                      >
                        <div className="w-9/12">
                          <div className="py-2">
                            <span>{item.name}</span>
                            <span>
                              - ₹
                              {item.price
                                ? item.price 
                                : item.name}
                            </span>
                          </div>
                          <p className="text-xs">{item.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                          <img
                            src={CDN_IMG_URL + item.imageId}
                            className="w-full"
                          />
                          <div className="flex justify-center  m-2 rounded-lg dark:bg-blue-500 text-white ">
                               <button className="m-1" onClick={() => setCartItem(item)}>
                                +
                                </button>
                                <span className="m-1" >
                                  Add 
                                </span>
                                <button className="m-1" disabled={countItems === 0} onClick={() => removeCartItem(item)}>
                                -  
                                </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );          
}
export default RestaurantMenu;