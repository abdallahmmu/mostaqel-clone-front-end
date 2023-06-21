import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getAllProjects } from '../../store/ProjectsSlice/ProjectsSlice'

const ProjectsListSingleProject = ({ project }) => {
    const params  = useSearchParams()
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(params)
        // dispatch(getAllProjects())
    },[params])
    
    return (
        <div className="project">
            <div className="row">
                <div className="col-sm-10">
                    <div className="project-title mt-3">
                        <a href="./project-details.html">
                            {project.title}
                        </a>
                    </div>
                    <div className="project-info ">

                        <span className="client-name">{project.range}</span>

                        <span className="prject-date">{project.createdAt}</span>

                        <span className="project-offers">2</span>
                    </div>
                    <div className="project-excerpt mt-3">
                        {project.description}
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="project-actions">
                        <button className="btn btn-primary">
                            same project
                        </button>
                        <div className="dropdown projects-filter">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}





        </div>
    )
}

export default ProjectsListSingleProject