import React, { useEffect, useState } from 'react'
import ProjectsListTitle from '../components/ProjectsList/ProjectsListTitle'
import ProjectsItemsList from '../components/ProjectsList/ProjectsItemsList'
import ProjectsListPagination from '../components/ProjectsList/ProjectsListPagination'
import ProjectsListFilter from '../components/ProjectsList/ProjectsListFilter'
import "../components/ProjectsList/ProjectList.css"

import { useDispatch, useSelector } from 'react-redux'
import { getAllProjects } from '../store/ProjectsSlice/ProjectsSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import LoadingSpinner from '../components/UI_Helpers/LoadingSpinner'
const ProjectsList = () => {



    const {projects, paginationData, isLoading} = useSelector(state => state.ProjectsSlice)
    const dispatch = useDispatch()

    const [params]  = useSearchParams()

    useEffect(() => {  
        console.log(projects)
        dispatch(getAllProjects({page: params.get('page') }))
    },[dispatch])

    return (
        <div className="projects-list">
            <div className="container">
                <ProjectsListTitle />
                <div className="row">
                    <div className="col-md-3">
                        <ProjectsListFilter />
                    </div>
                    <div className="col-md-9">
                        <ProjectsListPagination paginationData={paginationData} />
                        {!isLoading ? projects.map(project => (

                            <ProjectsItemsList key={project._id} 
                            project={project}
                             />
                         )) : <LoadingSpinner />
                        }
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProjectsList;