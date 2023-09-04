import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../features/basketSlice";

const store = configureStore({
    reducer:{
        basket:basketSlice
    }
})

export default store