import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../store/ProjectsSlice/ProjectsSlice';

const ProjectsListPagination = ({ paginationData }) => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.ProjectsSlice.paginationData.currentPage  )
    
    // useEffect(() => {
        // console.log(paginationData.numOfPages)
        // console.log(page)
    // },[page ])

    const retrievePagedProjcts = (ind) => {
        let page = ++ind
        console.log('index', page)
        
        dispatch(getAllProjects({page}))
        
    }
    const  retrievePrevPagedProjcts = (prev) => {
        dispatch(getAllProjects({page: prev}))
    }
    const  retrieveNexPagedProjcts = (next) => {
        dispatch(getAllProjects({page: next}))
    }


    return (
        <div className="pagination my-4">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item  ${(!paginationData.prev) ? 'disabled' : ''}`}>
                        <Link className="page-link " 
                        to={`/projects/?page=${paginationData.prev}`} 
                        onClick={() => retrievePrevPagedProjcts(paginationData.prev)}
                        aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </Link>
                    </li>

                        {Array(paginationData.numOfPages).fill(paginationData).map((pagiData, ind) => (

                            <li key={ind} className="page-item">
                                
                                <Link className={`page-link ${page == (ind+1) && 'active'}` }
                                onClick={() => retrievePagedProjcts(ind)} 
                                to={`/projects/?page=${ind + 1}`} > {ind + 1} </Link>
                            </li>
                        ))}

                    <li className={`page-item  ${(!paginationData.next) ? 'disabled' : ''}`}>
                        <Link className="page-link" 
                        to={`/projects/?page=${paginationData.next}`} 
                        onClick={() => retrieveNexPagedProjcts(paginationData.next)} aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ProjectsListPagination