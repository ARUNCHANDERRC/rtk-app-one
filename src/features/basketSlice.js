import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../data";

const initialState ={
    products:storeData,
    amount:0,
    total:0
}
const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        increaseAmount:(state,{payload}) =>{
            const item = state.products.find(item => item.name === payload.name);
            item.amount++
        },
        decreseAmount:(state,{payload}) =>{
            const item = state.products.find(item => item.name === payload.name);
            item.amount--
        },
        
    }
   
})
export const {increaseAmount,decreseAmount} = basketSlice.actions;
export default basketSlice.reducer;
