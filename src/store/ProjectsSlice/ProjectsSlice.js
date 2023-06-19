import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllProjects = createAsyncThunk(
    'projectFullData/getProjects',
    // async ({sort, page, limit, keyword, select}) => {
        async () => {
        try {
        
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}projects`);

            console.log(response)
            return response.data
        } catch (error) {
            console.log(error)
        }
    })

export const addProject = createAsyncThunk(
    'projectFullData/addProject', 
    async (Data) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}projects`, Data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    })


const ProjectsSlice = createSlice({
    name: 'projectFullData',
    initialState: {
        projects: [],
        paginationData: {},
        isLoading: false
    },
    extraReducers:  (builder) => {
            builder.addCase(getAllProjects.pending, (state, action) => {
                state.isLoading = true

            })
            
            builder.addCase(getAllProjects.fulfilled, (state, action) => {
                state.isLoading = false
                state.projects = action.payload.resultProjects;
                state.paginationData = action.payload.pagination;
                console.log(action)
               
            })

            builder.addCase(getAllProjects.rejected, (state, {payload}) => {
               state.isLoading = false
                console.log(payload)
            })
            
        }   
    
})

export default ProjectsSlice.reducer