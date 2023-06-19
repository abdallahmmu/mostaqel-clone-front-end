import React, { useEffect, useState } from 'react'
import ProjectsListTitle from '../components/ProjectsList/ProjectsListTitle'
import ProjectsItemsList from '../components/ProjectsList/ProjectsItemsList'
import ProjectsListPagination from '../components/ProjectsList/ProjectsListPagination'
import ProjectsListFilter from '../components/ProjectsList/ProjectsListFilter'
import "../components/ProjectsList/ProjectList.css"

import { useDispatch, useSelector } from 'react-redux'
import { getAllProjects } from '../store/ProjectsSlice/ProjectsSlice'
import { useParams, useSearchParams } from 'react-router-dom'
const ProjectsList = () => {

    const {projects, paginationData} = useSelector(state => state.ProjectsSlice)
    const dispatch = useDispatch()

    const [params]  = useSearchParams()
    console.log(projects)
    useEffect(() => {  
        // console.log(projects)
        params.get('page')
        dispatch(getAllProjects())
    
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
                        {(projects.length > 0) ?? projects.map(project => (

                            <ProjectsItemsList key={project._id} 
                            project={project}
                             />
                         ))} 

                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectsList