import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ minHeight: "100vh" }}
      >
        <img src="/images/error.png" alt="Error" className="w-25 mb-4" />
        <p className="text-danger fw-bold fs-3 text-center">
          Ooops!! Something Went Wrong <br /> Can not found what you are looking
          for
        </p>
        <button
          className="fw-bold btn btn-dark text-white fs-5 px-4 py-2"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Error404;
