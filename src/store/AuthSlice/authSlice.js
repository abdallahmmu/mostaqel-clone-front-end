import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'authSlice',
    initialState:{
        isAuth:false,
    },
    reducers:{
        toggleIsAuth(state){
            state.isAuth = !state.isAuth
        }
    }
})


export const authActions = authSlice.actions
export default authSlice.reducer