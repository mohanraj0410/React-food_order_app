import { createSlice } from "@reduxjs/toolkit";

let cartSlice=createSlice({
    name:"cart",
    initialState:{
        item:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.item.push(action.payload)
        }
    }
})
export let {addItem}=cartSlice.actions
export default cartSlice.reducer