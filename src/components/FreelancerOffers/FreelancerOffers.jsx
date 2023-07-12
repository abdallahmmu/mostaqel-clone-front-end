import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
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
      <div className="container-fluid ">
        <div className="container" style={{ minHeight: "500px" }}>
          <div className="row p-5">
            {offers.length ? (
              <ul className="list-group">
                {offers.map(({ amount, duration, projectId, updatedAt }) => {
                  return (
                    <div className="list-group-item m-2" key={projectId}>
                      <h3>
                        <Link to={`/projects/${projectId._id}`}>
                          {projectId.title}
                        </Link>
                      </h3>
                      <p>
                        {amount}$ within {duration} days{" "}
                        <spa className="opacity-50">
                          last update {moment(new Date(updatedAt)).fromNow()}
                        </spa>
                      </p>
                    </div>
                  );
                })}
              </ul>
            ) : (
              <h1>
                You Don't Have Any Offer Before
                <Link to="/projects"> Go To Apply</Link>
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FreelancerOffers;
