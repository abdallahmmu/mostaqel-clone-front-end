import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProjects } from '../../store/ProjectsSlice/ProjectsSlice';

const ProjectsListPagination = ({ paginationData }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    const {page1} = useParams()
    const page = useSelector(state => state.ProjectsSlice.paginationData.currentPage)
    const [limit, setLimt] = useState(5)
    const handleLimit = (e) => {
        dispatch(getAllProjects({ page1 , limit: e.target.value}))
        setLimt(e.target.value)
    }

    const retrievePagedProjcts = (ind) => {
        let page = ++ind
        console.log('index', page)
        dispatch(getAllProjects({ page, limit }))
        console.log(state)
    }
    const retrievePrevPagedProjcts = (prev) => {
        dispatch(getAllProjects({ page: prev }))
    }
    const retrieveNexPagedProjcts = (next) => {
        dispatch(getAllProjects({ page: next }))
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

                            <Link className={`page-link ${page == (ind + 1) && 'active'}`}
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