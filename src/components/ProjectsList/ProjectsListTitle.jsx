import React from 'react'
import { useState } from 'react'
import { Link} from 'react-router-dom';
import { getAllProjects } from '../../store/ProjectsSlice/ProjectsSlice';
import { useDispatch } from 'react-redux';

const ProjectsListTitle = () => {

  const dispatch = useDispatch()
  const [sort, setSort] = useState('latest');




  const getLatestProjects = (sortBy) => {
    setSort(sortBy)
    dispatch(getAllProjects({ sort:sortBy }))
  }
  return (

    <div className="page-title mt-5">
      <div className="h3 my-4">Open Projects</div>
      <div className="dropdown projects-filter my-4">
        <button className="btn btn-primary dropdown-toggle" type="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          {sort}
        </button>
        <ul className="dropdown-menu">
          <li>

            <Link className="dropdown-item"
              onClick={() => getLatestProjects('createdAt')} 
                >
              Latest</Link>
          </li>

          <li><Link className="dropdown-item"
            onClick={() => getLatestProjects('-createdAt')}
            >Oldest</Link></li>

          {/* <li><Link className="dropdown-item" 
          onClick={() => getAllProjects({ sort: '-createdAt' })}
          to={'?sort=most_applicant'}>Most Applicants</Link></li> */}

        </ul>
      </div>
    </div>

  )
}

export default ProjectsListTitle