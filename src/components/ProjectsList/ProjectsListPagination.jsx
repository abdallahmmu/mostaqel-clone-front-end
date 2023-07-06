import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../store/ProjectsSlice/ProjectsSlice';
import { Pagination, Stack } from '@mui/material';

const ProjectsListPagination = ({ paginationData }) => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.ProjectsSlice.paginationData.currentPage)
    const [limit, setLimt] = useState(5)


    const handleLimit = (e) => {
        dispatch(getAllProjects({ page , limit: e.target.value}))
        setLimt(e.target.value)
    }

    const retrievePagedProjcts = (ind) => {
        let page = ++ind
       
        dispatch(getAllProjects({ page, limit }))
    }
    


    return (
        <div className="pagination my-4">
                <Stack spacing={2}>
                    <Pagination count={paginationData.numOfPages} color="primary" onChange={(e, page) => retrievePagedProjcts(page) } />
                    
                </Stack>
        
            <div className="limit w-25 ms-auto ">
                <select className='form-control ' onChange={handleLimit} >
                    <option value="">Limit</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
        </div>
    )
}

export default ProjectsListPagination