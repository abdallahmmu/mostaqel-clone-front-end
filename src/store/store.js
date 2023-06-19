import { configureStore } from "@reduxjs/toolkit";


import authSlice from "./AuthSlice/authSlice";
import ProjectsSlice from "./ProjectsSlice/ProjectsSlice"
export const store = configureStore({
    reducer:{
        authSlice,
        ProjectsSlice
    }
})

