import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import { fetchData } from "./helper.js";
import styles from "./projectDetails.module.css";
import ProjectStatistics from "./ProjectStatistics.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectOffers from "./ProjectOffers.jsx";
import SendOffer from "./SendOffer.jsx";

const ProjectDetails = () => {
  const [details, setDetails] = useState({});
  const [token, setToken] = useState();
  const [role, setRole] = useState();
  const [clintId, setClintId] = useState();

  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(projectId, setDetails, navigate);
    setToken(JSON.parse(localStorage.getItem("isAuth"))?.["token"]);
    setRole(JSON.parse(localStorage.getItem("isAuth"))?.["role"]);
    setClintId(JSON.parse(localStorage.getItem("isAuth"))?.["id"]);
  }, []);

  return (
    <>
      <div className={`pt-5 ${styles.project_details_page}`}>
        <div className="container">
          <h2 className="mb-4">{details.title}</h2>
          <div className="row">
            <ProjectStatistics details={details} />
            <div className="col-lg-9 col-md-12">
              <ProjectInfo details={details} />
              {token ? (
                role == "freelancer" ? (
                  <SendOffer />
                ) : (
                  <Box component={Paper} mt={2} className="p-5 text-center">
                    <h3>Want To Publish </h3>
                    <Link className="btn btn-secondary " to="/send">
                      Publish Your Project
                    </Link>
                  </Box>
                )
              ) : (
                <Box component={Paper} mt={2} className="p-5 text-center">
                  <h3>Want To Apply</h3>
                  <Link className="btn btn-primary me-5 " to="/login">
                    Login
                  </Link>
                  <Link className="btn btn-secondary " to="/register">
                    Regitser
                  </Link>
                </Box>
              )}
              <ProjectOffers
                id={projectId}
                isOwner={details.clientId == clintId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
