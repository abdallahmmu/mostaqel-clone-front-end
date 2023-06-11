import React from 'react'
import { Link } from 'react-router-dom'

function ImageCard() {
  return (
<div className="col-sm-12 col-md-4">
  {/*Start Card Profile*/}
  <div className="card border-0 mt-3">
    <div className="card-body">
      <div className="image text-center">
        <img src="https://avatars.hsoubcdn.com/d1651fcfe3cfdfeed676eb5a5271b958?s=128" className="rounded-circle mb-3" width={84} height={84} alt="Profile Pic" />
        <p><Link to="/" className="text-dark">Abdallah Muhammed</Link></p>
        <hr />
        <p><Link to="/" className="text-dark">Edit Profile</Link></p>
      </div>
    </div>
  </div>
</div>

  )
}

export default ImageCard