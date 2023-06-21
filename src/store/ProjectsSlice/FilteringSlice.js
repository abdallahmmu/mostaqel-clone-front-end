import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: "ProjectFilter",
    initialState: {
        page: 1,
        limit: 5 
    },
    reducers: {
        setFilteringObj: (state, payload) => {
            console.log(action.payload)
            return state 
        }
    }
})

export const { setFilteringObj } = FilterSlice.actions
export default FilterSlice.reducer