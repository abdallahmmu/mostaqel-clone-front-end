import React, { useState, useEffect } from "react";
import { fetchMyOffers } from "./helpers.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FreelancerOffers = () => {
  const [offers, setOffers] = useState([]);
  const token = useSelector((state) => state.authSlice.userData?.token);
  const navigate = useNavigate();
  useEffect(() => {
    fetchMyOffers(setOffers, token, navigate);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {offers.map((offer) => {
              return <h1>{offer.amount}</h1>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancerOffers;
