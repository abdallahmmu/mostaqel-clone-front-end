import React from "react";
import styles from "./projectDetails.module.css";
import ProjectStatistics from "./ProjectStatistics.jsx";
import ProjectInfo from "./ProjectInfo.jsx";
import ProjectOffers from "./ProjectOffers.jsx";
import SendOffer from "./SendOffer.jsx";
const ProjectDetails = () => {
  return (
    <div className={styles.project_details_page}>
      <div className="container">
        <div className="page-title">
          <div className="h3  my-4">Projects Details</div>
        </div>
        <div className="row">
          <ProjectStatistics />
          <div className="col-md-9">
            <ProjectInfo />
            <SendOffer />
            <ProjectOffers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
