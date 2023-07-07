import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../store/ProjectsSlice/ProjectsSlice';
import { FormControl, InputLabel, MenuItem, Pagination, Select, Stack } from '@mui/material';

const ProjectsListPagination = ({ paginationData }) => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.ProjectsSlice.paginationData.currentPage)
    const [limit, setLimt] = useState(5)
    const handleLimit = (e) => {
        dispatch(getAllProjects({ page, limit: e.target.value }))
        setLimt(e.target.value)
    }

    const retrievePagedProjcts = (ind) => {
        let page = ++ind

        dispatch(getAllProjects({ page, limit }))
    }



    return (
        <div className="pagination my-4 d-flex justify-content-between">
            <Stack spacing={2}>
                <Pagination count={paginationData.numOfPages} color="primary" onChange={(e, page) => retrievePagedProjcts(page)} />

            </Stack>


            <FormControl sx={{  minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Limit</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={limit}
                    label="Age"
                    onChange={handleLimit}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default ProjectsListPagination