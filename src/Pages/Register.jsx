import React, { useEffect, useState } from "react";
import FreelancerRegister from "../components/AuthComponents/FreelancerRegister";

function Register() {
  const [client, setClient] = useState('');


  useEffect(()=>{
    document.title = 'Mostaqel-Clone | Register'
  },[])
  return (
    <>
      {/* Choose Type */}
      {!client && (
        <div
          className="d-flex flex-column  align-items-center justify-content-center"
          style={{ height: "80vh" }}
        >
          <h1>Please Choose Type of Registeration</h1>
          <button
            onClick={() => setClient("client")}
            className="btn btn-danger p-3 mb-2"
          >
            Do You Want To be A Client
          </button>
          <button
            onClick={() => setClient("freelancer")}
            className="btn btn-dark p-3"
          >
            Do You Want To be A Freelancer
          </button>
        </div>
      )}

      {/* Freelancer Form */}
     {client === 'freelancer' && <FreelancerRegister/>}
      {/* Client Form */}
      {client === 'client' && <div>Client Form</div>}
    </>
  );
}

export default Register;
