import React from 'react'
import ProjectItemCard from '../../ReusableComponents/ProjectItemCard'

function LatestProjectsCard() {
  return (
<div className="col-sm-12 col-md-8">
  <div className="card border-0 mt-3">
    <div className="card-body">
      <h3 className="mt-3">Latest Projects</h3>
      <hr />
      {/*Project Items*/}
      <ProjectItemCard/>
    </div>
  </div>
</div>

  )
}

export default LatestProjectsCard