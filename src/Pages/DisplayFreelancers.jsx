import PersonalProfile from "../components/PersonalProfile/PersonalProfile";
import { Link, useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageGeneration from "../components/UI_Helpers/ImageGeneration";
import { useTranslation } from "react-i18next";

function DisplayFreelancers() {
  const { t } = useTranslation();
  const { data } = useLoaderData();

  return (
    <div className="container-fluid mt-5 " style={{ backgroundColor: "white" }}>
      <div
        className="row col-md-12 justify-content-center"
        style={{ margin: "100px 0px" }}
      >
        <div className="col-md-12 text-center">
        {!data.avatar && <ImageGeneration firstName={data.firstName} LastName={data.LastName || data.lastName}/>}
        {data.avatar &&  <ImageGeneration avatar={data.avatar} />}
        </div>
        <div className="col-md-12 text-center">
          {" "}
          {data.firstName} {data.lastName || data.LastName}
        </div>
        <div className="col-md-12 text-center">{data.jobTitle}</div>
      </div>

      <div
        className="row col-md-12 justify-content-center mb-0 px-0"
        style={{ margin: "100px 0px", backgroundColor: "white" }}
      >
        <div className="container row col-md-6 text-start">
          <div
            className="col-md-3 text-start"
            style={{ backgroundColor: "white" }}
          >
            <Link
            to={`/profile/edit/${data._id}`}
              className="btn btn-primary"
              style={{ borderRadius: "0px",}}
            >
              {t("Edit Profile")}
            </Link>
          </div>
        </div>

        <div
          className="row container col-md-6 justify-content-end"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="col-md-3 text-start"
            style={{ backgroundColor: "#F0F0F0" }}
          >
            <p className="text-center mt-3">{t("personalProfile")}</p>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mb-5"
        style={{ backgroundColor: "#F0F0F0"}}
      >
        <div className="container-fluid col-md-12 justify-content-center mb-5">
          <PersonalProfile data={data} />
        </div>
      </div>
    </div>
  );
}

export default DisplayFreelancers;
