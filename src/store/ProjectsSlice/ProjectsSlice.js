import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { store } from "../store";


export const getAllProjects = createAsyncThunk(
    'projectFullData/getProjects',
    async ({ sort, page, limit, keyword, select , categoryId, range}) => {
        // async () => {

        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects`, {
                params: {
                    page,
                    sort,
                    limit,
                    keyword,
                    select,
                    range,
                    categoryId
                }
            });

            console.log(location.search)
            return response.data
        } catch (error) {
            console.log(error)
        }
    })

export const addingNewProject = createAsyncThunk(
    'projectFullData/addProject',
    async (Data) => {
        try {
            let { authSlice } = store.getState()

            console.log({ ...Data, clientId: authSlice.userData.id, })

            // console.log(`${import.meta.env.VITE_API_URL}/projects`)
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/projects`,
                JSON.stringify({ ...Data, clientId: authSlice.userData.id }), {
                headers: {
                    Authorization: JSON.parse(localStorage.getItem('isAuth')).token,
                    'Content-Type': 'application/json'

                }
            })

        } catch (error) {
            console.log(error)
        }
    })


const ProjectsSlice = createSlice({
    name: 'projectFullData',
    initialState: {
        projects: [],
        paginationData: {},
        isLoading: false,
    
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProjects.pending, (state, action) => {
            state.isLoading = true

        })

        builder.addCase(getAllProjects.fulfilled, (state, action) => {
            state.isLoading = false
            state.projects = action.payload.resultProjects;
            state.paginationData = action.payload.pagination;
            // console.log(action)

        })

        builder.addCase(getAllProjects.rejected, (state, { payload }) => {
            state.isLoading = false
            console.log(payload)
        })

    }

})

export const {setFilterObj} = ProjectsSlice.actions

export default ProjectsSlice.reducer