import React, { useCallback, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useLoaderData } from "react-router-dom";
import { uploaderPhoto } from "./uploaderPhoto";
import { updateUserData } from "./updateUserData";
import { updateFreelanceSchema } from "../../../Schemas/updateFreelancer";
import { LoadingIndecator } from "../../UI_Helpers/LoadingIndecator";
import ImageGeneration from "../../UI_Helpers/ImageGeneration";
import { useSelector } from "react-redux";



function EditForm() {
  const { data } = useLoaderData();
  const [profilePic, setProfilePic] = useState(null);
  const {userData} = useSelector((state)=>state.authSlice)
  const [isLoading,setIsLoading] = useState();


  const fields = {
    firstName: data ? data.firstName : '',
    lastName: data ? data.lastName : '',
    jobTitle: data ? data.jobTitle: '',
    description: data ? data.description : "",
  };

  const onHandelAvatarUrl = useCallback(() => {
    const avatarInput = document.getElementById("AvatarUrl");
    avatarInput.click();
  }, []);

  const changeProfilePicHandler = useCallback((e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.addEventListener("loadend", () => {
      setProfilePic({
        avatarUrl: fileReader.result,
        avatar:e.target.files[0]
      });
    });
  }, []);


  const handelUpdateData =  (values) => {
    const role= userData.role
    const id = userData.id
    const token = userData.token
    let photoData = new FormData()
    if(profilePic){
      photoData.append('avatar',profilePic.avatar)
    }
    if(!profilePic){
      setIsLoading(true)
        updateUserData(role,id,values,token).then(data => {
          setIsLoading(false)
        })
      }else{
        setIsLoading(true)
        Promise.all([uploaderPhoto(photoData,data._id,token), updateUserData(role,id,values,token)]).then(responses => {
          setIsLoading(false)
        })
      }
    
    


  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 py-4">
          <div className="bg-white border mt-4 p-4">
            <h3>Personal Information</h3>
            <p>If you have modified it, you will need to verify it again.</p>

            {/* image */}
            <div
              className="d-flex mt-2 align-items-center justify-content-center"
              onClick={onHandelAvatarUrl}
            >
              {!profilePic && !data.avatar && (
                <ImageGeneration
                  firstName={data.firstName}
                  LastName={data.lastName}
                  role="button"
                />
              )}
              {profilePic && (
                <ImageGeneration avatarUrl={profilePic.avatarUrl} />
              )}
              {data.avatar && !profilePic && <ImageGeneration avatar={data.avatar} />}
              <input
                onChange={changeProfilePicHandler}
                type="file"
                id="AvatarUrl"
                accept="image/jpg, image/jpeg, image/png, image/bmp, image/gif"
                style={{ display: "none" }}
              />
            </div>
            {profilePic && (
              <p
                className="text-danger text-center mt-2"
                role="button"
                onClick={() => setProfilePic(null)}
              >
                remove
              </p>
            )}

            {/* Form */}

            <Formik
              initialValues={fields}
              validationSchema={updateFreelanceSchema}
              onSubmit={handelUpdateData}
            >
              {() => (
                <Form>
                  <div className="row mt-4">
                    <div className="col-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder="firstName"
                        name="firstName"
                      />
                      <ErrorMessage
                        name="firstName"
                        className="text-danger"
                        component="div"
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder="lastName"
                        name="lastName"
                      />
                      <ErrorMessage
                        name="lastName"
                        className="text-danger"
                        component="div"
                      />
                    </div>
                    <div className="col-12 mt-4">
                      <label htmlFor="jobTitle" className="form-label">
                        Job Title <span className="text-danger">*</span>
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="jobTitle"
                        placeholder="ex - Front-end Developer"
                        name="jobTitle"
                      />
                      <ErrorMessage
                        name="jobTitle"
                        className="text-danger"
                        component="div"
                      />
                    </div>
{               data.role !== 'client' &&     <div className="col-12 mt-4">
                      <label htmlFor="description" className="form-label">
                        Description <span className="text-danger">*</span>
                      </label>
                      <Field
                        as="textarea"
                        className="form-control"
                        id="description"
                        placeholder="description"
                        name="description"
                      />
                      <ErrorMessage
                        name="description"
                        className="text-danger"
                        component="div"
                      />
                    </div>}
                    <div className="d-flex align-items-center justify-content-end mt-4">
                      <button
                        className="btn btn-primary text-center"
                        type="submit"
                      >
                        {isLoading && <LoadingIndecator/>}
                        {!isLoading && <span> Update</span>}
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditForm;
