import React, { useCallback, useState } from 'react'
import ImageGeneration from '../../UI_Helpers/ImageGeneration'
function EditForm() {
  const [profilePic,setProfilePic]= useState(null)

  const onHandelAvatarUrl = useCallback(()=>{
    const avatarInput = document.getElementById('AvatarUrl')
    avatarInput.click()
  },[])

  const changeProfilePicHandler = useCallback((e)=>{
    const fileReader = new FileReader()
     fileReader.readAsDataURL(e.target.files[0])
     fileReader.addEventListener('loadend',()=>{
       setProfilePic(fileReader.result)
     })
  },[])
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 offset-md-3 py-4">
          <div className="bg-white border mt-4 p-4">
              <h3>Personal Information</h3>
              <p>If you have modified it, you will need to verify it again.</p>

              {/* image */}
              <div className="d-flex mt-2 align-items-center justify-content-center" onClick={onHandelAvatarUrl} >
                {!profilePic && <ImageGeneration firstName={'Abdallah'} LastName={'Muhammed'} role="button"/>}
               {profilePic && <ImageGeneration avatarUrl={profilePic}/>}
                <input onChange={changeProfilePicHandler} type="file" id='AvatarUrl'  accept='image/jpg, image/jpeg, image/png, image/bmp, image/gif' style={{display:"none"}}/>
              </div>
               {profilePic && <p className='text-danger text-center mt-2' role='button' onClick={()=>setProfilePic(null)}>remove</p>}

              {/* Form */}

              <div className="row mt-4">
                <div className="col-6">
                <label htmlFor="firstName" className="form-label">First Name <span className='text-danger'>*</span></label>
                 <input type="text" className="form-control" id="firstName" placeholder='firstName' name='firstName'/>
                </div>
                <div className="col-6">
                <label htmlFor="lastName" className="form-label">Last Name <span className='text-danger'>*</span></label>
                 <input type="text" className="form-control" id="lastName" placeholder='lastName' name='lastName'/>
                </div>
                <div className="col-12 mt-4">
                <label htmlFor="jobTitle" className="form-label">Job Title <span className='text-danger'>*</span></label>
                 <input type="text" className="form-control" id="jobTitle" placeholder='jobTitle' name='jobTitle'/>
                </div>
                <div className="d-flex align-items-center justify-content-end mt-4">
                  <button className='btn btn-primary text-center'>Update</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditForm