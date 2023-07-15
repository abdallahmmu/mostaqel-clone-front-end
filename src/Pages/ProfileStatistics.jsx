import React, { useEffect } from "react";
import ImageCard from "../components/ProfileComponents/ProfileStatistics/ImageCard";
import PaymentCard from "../components/ProfileComponents/ProfileStatistics/PaymentCard";
import MessagesCard from "../components/ProfileComponents/ProfileStatistics/MessagesCard";
import OffersCard from "../components/ProfileComponents/ProfileStatistics/OffersCard";
import PortfolioCard from "../components/ProfileComponents/ProfileStatistics/PortfolioCard";
import LatestProjectsCard from "../components/ProfileComponents/ProfileStatistics/LatestProjectsCard";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router-dom";

function ProfileStatistics() {
  const { t } = useTranslation();
  const { userData } = useSelector((state) => state.authSlice);
  const {data} = useLoaderData()
  return (
    <section id="control-pannel">
      <div className="container">
        {!data.isActive && <p className="py-4 bg-white text-center text-danger fw-bold">Your Account Has Been Deactivated Feel Free to contact us: <br/> <span className="text-dark">mostaql-clone@mostaql.com</span></p>}
        <span className="text-p mb-2">{t("Main")}</span>
        <h3>{t("Control Pannel")}</h3>

        {/* <!--Row 1 Pannel Information ImageCard And Payment Card--> */}
        <div className="row">
          <ImageCard />
          <PaymentCard />
        </div>

        {/* <!--Row 2 Pannel Information MessagesCard And OffersCard--> */}
        <div className="row">
          <MessagesCard />
          <OffersCard />
        </div>

        {/* <!--Row 2 Pannel Information PortfolioCard And LatestProjects--> */}

        <div className="row">
          {userData.role==='freelancer' &&  <PortfolioCard />}
          <LatestProjectsCard />
        </div>
      </div>
    </section>
  );
}

export default ProfileStatistics;
