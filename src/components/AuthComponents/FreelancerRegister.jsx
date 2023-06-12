import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { freelancerSchemaValidation } from '../../Schemas/FreelancerRegisterationSchema';


const feilds ={
  firstName:'',
  lastName:'',
  username:'',
  jobTitle:'',
  email:'',
  phoneNumber:'',
  password:'',
  confirmPassword:'',
  categoryId:'',
}

function FreelancerRegister() {
  const handelRegisterSubmit = (values,actions) => {
    if(values.confirmPassword !== values.password){
      errors.confirmPassword = 'Password is Not Match'
      return;
    }
    console.log('Done!!')
  }
  const {values,handleSubmit,errors,handleChange} = useFormik({
    initialValues:feilds,
    validateOnChange:false,
    validationSchema:freelancerSchemaValidation,
    onSubmit:handelRegisterSubmit
    
  })
  return (
<div id="form__container" style={{padding: '50px 0px', backgroundColor: '#F9F9F9'}}>
  <div className="container bg-white" style={{borderRadius: 40, boxShadow: '0px 0px 5px 0px #2386'}}>
    <h3 className='text-center pt-4 fw-semibold'>Register As A Freelancer</h3>
    <div className="row p-5">
      <img src="images/regitser.jpeg"  className="col-lg-6 col-md-12" />
      <form className="row g-3 col-lg-6 col-md-12" onSubmit={handleSubmit}>
        <div className=" col-md-6">
          <label htmlFor="firstName" className="form-label">First Name <span className='text-danger'>*</span></label>
          <input type="text" className="form-control" id="firstName" placeholder='firstName' name='firstName' onChange={handleChange} value={values.firstName}/>
          {errors.firstName && <p className='text-danger mt-2'>{errors.firstName}</p>}
        </div>
        <div className=" col-md-6">
          <label htmlFor="lastName" className="form-label">Last Name <span className='text-danger'>*</span></label>
          <input type="text" className="form-control" id="lastName" placeholder='lastName' name='lastName' onChange={handleChange} value={values.lastName}/>
          {errors.lastName && <p className='text-danger mt-2'>{errors.lastName}</p>}
        </div>
        <div className=" col-md-6">
          <label htmlFor="username" className="form-label">username <span className='text-danger'>*</span></label>
          <input type="text" className="form-control" id="username" placeholder='username' name='username'onChange={handleChange} value={values.username}/>
          {errors.username && <p className='text-danger mt-2'>{errors.username}</p>}
        </div>
        <div className=" col-md-6">
          <label htmlFor="jobTitle" className="form-label">job Title <span className='text-danger'>*</span></label>
          <input type="text" className="form-control" id="jobTitle" placeholder='ex - Web Developer' name='jobTitle' onChange={handleChange} value={values.jobTitle}/>
          {errors.jobTitle && <p className='text-danger mt-2'>{errors.jobTitle}</p>}
        </div>
        <div className=" col-md-12">
          <label htmlFor="inputEmail4" className="form-label">Email <span className='text-danger'>*</span></label>
          <input type="email" className="form-control" id="inputEmail4" placeholder='Email' name='email' onChange={handleChange} value={values.email}/>
          {errors.email && <p className='text-danger mt-2'>{errors.email}</p>}
        </div>
        <div className=" col-md-12">
          <label htmlFor="phoneNumber" className="form-label">Phone Number <span className='text-danger'>*</span></label>
          <input type="text" className="form-control" id="phoneNumber" placeholder='PhoneNumber' name='phoneNumber' onChange={handleChange} value={values.phoneNumber}/>
          {errors.phoneNumber && <p className='text-danger mt-2'>{errors.phoneNumber}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Password <span className='text-danger'>*</span></label>
          <input type="password" className="form-control" id="inputPassword4" placeholder='password' name='password' onChange={handleChange} value={values.password}/>
          {errors.password && <p className='text-danger mt-2'>{errors.password}</p>}
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword5" className="form-label">Confirm Password <span className='text-danger'>*</span></label>
          <input type="password" className="form-control" id="inputPassword5" placeholder='confirmPassword' name='confirmPassword' onChange={handleChange} value={values.confirmPassword}/>
          {errors.confirmPassword && <p className='text-danger mt-2'>{errors.confirmPassword}</p>}
        </div>
        <div className=" col-md-12">
          <label htmlFor="categoryId" className="form-label">Category <span className='text-danger'>*</span></label>
          <select className="form-select" aria-label="Default select example" name='categoryId' onChange={handleChange} value={values.categoryId}>
            <option >Choose Category</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          {errors.categoryId && <p className='text-danger mt-2'>{errors.categoryId}</p>}
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