import React from 'react'
import { Link } from 'react-router-dom'

function FreelancerRegister() {
  return (
<div id="form__container" style={{padding: '50px 0px', backgroundColor: '#F9F9F9'}}>
  <div className="container bg-white" style={{borderRadius: 40, boxShadow: '0px 0px 5px 0px #2386'}}>
    <h3 className='text-center pt-4 fw-semibold'>Register As A Freelancer</h3>
    <div className="row p-5">
      <img src="images/regitser.jpeg"  className="col-lg-6 col-md-12" />
      <form className="row g-3 col-lg-6 col-md-12">
        <div className=" col-md-6">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" placeholder='firstName' name='firstName' />
        </div>
        <div className=" col-md-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" placeholder='lastName' name='lastName'/>
        </div>
        <div className=" col-md-6">
          <label htmlFor="username" className="form-label">username</label>
          <input type="text" className="form-control" id="username" placeholder='username' name='username'/>
        </div>
        <div className=" col-md-6">
          <label htmlFor="jobTitle" className="form-label">job Title</label>
          <input type="text" className="form-control" id="jobTitle" placeholder='ex - Web Developer' name='jobTitle' />
        </div>
        <div className=" col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail4" placeholder='Email' name='email'/>
        </div>
        <div className=" col-md-12">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input type="email" className="form-control" id="phoneNumber" placeholder='PhoneNumber' name='phoneNumber'/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword4" placeholder='password' name='password'/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword5" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="inputPassword5" placeholder='confirmPassword' name='confirmPassword'/>
        </div>
        <div className=" col-md-12">
          <label htmlFor="categoryId" className="form-label">Category</label>
          <select className="form-select" aria-label="Default select example">
            <option >Choose Category</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
        <div className="col-12  mx-auto">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
        <span>Have you account <Link to="/login">Log In</Link></span>
      </form>
    </div>
  </div>
</div>

  )
}

export default FreelancerRegister