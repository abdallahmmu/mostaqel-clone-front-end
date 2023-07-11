import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { fetchData } from "./helper.js";
import styles from "./projectDetails.module.css";
import ProjectStatistics from "./ProjectStatistics.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectOffers from "./ProjectOffers.jsx";
import SendOffer from "./SendOffer.jsx";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";

const ProjectDetails = () => {

  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { token, role, id } = useSelector((state) => state.authSlice?.userData);

  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(projectId, setDetails, setLoading, navigate);

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
              {!loading &&
                (token ? (
                  role == "freelancer" ? (
                    <SendOffer />
                  ) : (
                    <Box component={Paper} mt={2} className="p-5 text-center">
                      <h3>Want To Publish </h3>
                      <Link className="btn btn-secondary " to="/add-projects">
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
                ))}
              {!loading && (
                <ProjectOffers
                  id={projectId}
                  isOwner={details.clientId._id == id}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
