import { configureStore } from "@reduxjs/toolkit";


import authSlice from "./AuthSlice/authSlice";

export const store = configureStore({
    reducer:{
        authSlice
    }
})

