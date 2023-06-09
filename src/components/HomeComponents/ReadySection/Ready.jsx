import React from 'react'
import { Link } from 'react-router-dom'

function Ready() {
  return (
<section id="ready">
  <div className="container">
    <h1 className="fw-bold fs-3 text-white text-center mb-5">Are You Ready ?</h1>
    <div className="d-flex justify-content-center mt-5">
      <Link to="projects" className="btn py-3 px-5 bg-white text-primary border border-white">Start Your Project Now</Link>
    </div>
  </div>
</section>

  )
}

export default Ready