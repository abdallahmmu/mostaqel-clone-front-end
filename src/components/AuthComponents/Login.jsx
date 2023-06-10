import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      id="form__container"
      style={{ padding: "50px 0px", backgroundColor: "#F9F9F9" }}
    >
      <div
        className="container bg-white"
        style={{ borderRadius: 40, boxShadow: "0px 0px 5px 0px #2386" }}
      >
        <div className="row p-5">
          <img src="/images/regitser.jpeg" alt className="col-lg-6 col-md-12" />
          <form className="row g-3 col-lg-6 col-md-12">
            <div className=" col-md-12">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-12">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12  mx-auto">
              <button type="submit" className="btn btn-primary text-white">
                Login
              </button>
            </div>
            <span>
              Haven't you account <Link to="/register">Sign Up</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
