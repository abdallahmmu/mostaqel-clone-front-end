import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { freelancerSchemaValidation } from "../../Schemas/FreelancerRegisterationSchema";

const feilds = {
  firstName: "",
  lastName: "",
  username: "",
  jobTitle: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  categoryId: "",
};

function FreelancerRegister() {
  const handelRegisterSubmit = (values, { resetForm }) => {
    console.log("Done!!");
    resetForm();
  };
  return (
    <div
      id="form__container"
      style={{ padding: "50px 0px", backgroundColor: "#F9F9F9" }}
    >
      <div
        className="container bg-white"
        style={{ borderRadius: 40, boxShadow: "0px 0px 5px 0px #2386" }}
      >
        <h3 className="text-center pt-4 fw-semibold">
          Register As A Freelancer
        </h3>
        <div className="row p-5">
          <div className="col-lg-6 col-md-12 d-none d-sm-block">
            <div className="d-flex h-100 w-100 align-items-start justify-content-center">
              <img src="images/register.jpg" className=" img-fluid" />
            </div>
          </div>

          <Formik
            initialValues={feilds}
            validationSchema={freelancerSchemaValidation}
            onSubmit={handelRegisterSubmit}
          >
            {({ values, touched, isSubmitting }) => (
              <Form className="row g-3 col-lg-6 col-md-12">
                <div className=" col-md-6">
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
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className=" col-md-6">
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
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className=" col-md-6">
                  <label htmlFor="username" className="form-label">
                    username <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="username"
                    name="username"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className=" col-md-6">
                  <label htmlFor="jobTitle" className="form-label">
                    job Title <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="jobTitle"
                    placeholder="ex - Web Developer"
                    name="jobTitle"
                  />
                  <ErrorMessage
                    name="jobTitle"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className=" col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className=" col-md-12">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="PhoneNumber"
                    name="phoneNumber"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="password"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword5" className="form-label">
                    Confirm Password <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="password"
                    className="form-control"
                    id="inputPassword5"
                    placeholder="confirmPassword"
                    name="confirmPassword"
                  />
                  {values.password !== values.confirmPassword &&
                    touched.confirmPassword && (
                      <p className="text-danger mt-2">Not Matched Password</p>
                    )}
                </div>
                <div className=" col-md-12">
                  <label htmlFor="categoryId" className="form-label">
                    Category <span className="text-danger">*</span>
                  </label>
                  <Field
                    className="form-select"
                    aria-label="Default select example"
                    name="categoryId"
                    as="select"
                  >
                    <option>Choose Category</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </Field>
                  <ErrorMessage
                    name="categoryId"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="col-12  mx-auto">
                  <button type="submit" className="btn btn-primary">
                    {isSubmitting ? "Loading ..." : "Submit"}
                  </button>
                </div>
                <span>
                  Have you account <Link to="/login">Log In</Link>
                </span>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default FreelancerRegister;
