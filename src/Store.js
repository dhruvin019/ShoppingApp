import {configureStore} from "@reduxjs/toolkit";
import {CartSlice} from "./CartSlice";
import CartReducer from "./CartSlice";

export const Store = configureStore({
    reducer:{
        cart:CartSlice.reducer,
    }
});