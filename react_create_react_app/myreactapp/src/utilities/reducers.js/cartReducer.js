import { createSlice } from "@reduxjs/toolkit";

const cartReducer=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        countItems:0
    },
    reducers:{
        addToCart(state,action){
            state.cartItems.push(action.payload);
            state.countItems++;
        },
        deleteFromCart(state,action){
            const index=action.payload;
            state.cartItems.splice(index,1);
            state.countItems--;
        },
        clearCart(state){
            state.cartItems=[];
            state.countItems=0;
        }
    }
})
export const {addToCart,deleteFromCart,clearCart} = cartReducer.actions;
export default cartReducer.reducer;