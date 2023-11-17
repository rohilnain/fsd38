import { createSlice } from "@reduxjs/toolkit";

const userReducer=createSlice({
    name:'user',
    initialState:{
        userName:'defaultName'
    },
    reducers:{
        setUserName(state,action){
            state.userName=action.payload
        }
    }
}
)
export const {setUserName}=userReducer.actions;
export default userReducer.reducer;