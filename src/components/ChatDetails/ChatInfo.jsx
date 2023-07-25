import React from "react";
import { useTranslation } from "react-i18next";

const ChatInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-md-3">
        <div className="project-card bg-white d-flex flex-wrap p-4 ">
          <div className="title mb-3 w-100 h5"> {t("Project Card")}</div>
          <div className="project-status mt-3 w-50">{t("project status")}</div>
          <div className="project-status mt-3 w-50 bg-success p-1 text-center text-white">
            {t("Active")}
          </div>
          <div className="project-date mt-3 w-50">{t("Publish Date")}</div>
          <div className="project-date mt-3 w-50">20-05-2023</div>
          <div className="project-budget mt-3 w-50">{t("Budget")}</div>
          <div className="project-budget mt-3 w-50">20$ - 100$</div>
          <div className="project-time mt-3 w-50">{t("project Time")}</div>
          <div className="project-offers mt-3 w-50">{t("Offers Counter")}</div>
          <div className="project-offers mt-3 w-50">50</div>
        </div>
      </div>
    </>
  );
};

export default ChatInfo;
