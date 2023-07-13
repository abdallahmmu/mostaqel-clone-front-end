import React from "react";
import { useTranslation } from "react-i18next";


const ChatInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="col-md-3">
        <div class="project-card bg-white d-flex flex-wrap p-4 ">
          <div class="title mb-3 w-100 h5"> {t("Project Card")}</div>
          <div class="project-status mt-3 w-50">{t("project status")}</div>
          <div class="project-status mt-3 w-50 bg-success p-1 text-center text-white">
            {t("Active")}
          </div>
          <div class="project-date mt-3 w-50">{t("Publish Date")}</div>
          <div class="project-date mt-3 w-50">20-05-2023</div>
          <div class="project-budget mt-3 w-50">{t("Budget")}</div>
          <div class="project-budget mt-3 w-50">20$ - 100$</div>
          <div class="project-time mt-3 w-50">{t("project Time")}</div>
          <div class="project-offers mt-3 w-50">{t("Offers Counter")}</div>
          <div class="project-offers mt-3 w-50">50</div>
        </div>
      </div>
    </>
  );
};

export default ChatInfo;
