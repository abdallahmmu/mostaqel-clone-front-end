import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, json, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ThankYou = () => {
  const { userData } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  const sendData = async () => {
    let amount = localStorage.getItem("amount");
    let sessionId = localStorage.getItem("sessionId");

    if (sessionId) {
      try {
        let data = await axios.post(
          `${import.meta.env.VITE_API_URL}/payment/thankyou`,
          JSON.stringify({
            mode: "deposit",
            amount,
            sessionId,
            clientId: userData.id,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        title: "No Session in localStorage",
      });
      // navigate('/')
    }
  };

  const handleThank = () => {
    sendData().then((data) => Navigate("/"));
    navigate(`/payment/${userData.id}`);
    localStorage.removeItem("sessionId");
    localStorage.removeItem("amount");
  };
  return (
    <div className="thankyou ">
      <div className="container">
        <div className="row text-center my-5">
          <div className="h1">Thank you for Depositing</div>

          <div className="h3 text-seccess">
            <button className="btn btn-success" onClick={handleThank}>
              thank you{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
