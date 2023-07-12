import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLoaderData } from 'react-router-dom'
function OffersCard() {
  const {freelancersOffers} = useLoaderData()
  const {userData} = useSelector((state)=>state.authSlice)
  return (
<div className="col-sm-12 col-md-8">
  <div className="card border-0 mt-3">
    <div className="card-body">
      <div className="row">
        {/*Offers Intro*/}
        <div className="col-12">
          <Link to={userData.role === 'freelancer' ? '/myoffers': '/projects'} className="text-dark text-center">
            <p className="fs-4">{userData.role === 'freelancer' ? 'My Offers' : 'My Projects'} <br /><span>{freelancersOffers.length || 'API CALL NEEDED'}</span></p>
          </Link>
        </div>
        {/*BreakLine*/}
        <hr />
        <div className="col-6">
          <div>
            <p className="text-center text-dark">Avilable Offers : <span className="fw-bold text-p">15</span></p>
          </div>
        </div>
        <div className="col-6">
          <div>
            <p className="text-center text-dark">Offers Left : <span className="fw-bold text-p">15</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default OffersCard