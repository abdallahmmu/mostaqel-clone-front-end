import React from 'react'
import ProjectsListSingleProject from './ProjectsListSingleProject'

const ProjectsItemsList = ({project}) => {
  return (
    
        <div className="projects-list-side">
            <ProjectsListSingleProject  project={project}/>
        </div>
    
  )
}

export default ProjectsItemsList