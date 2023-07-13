import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectInfo = ({ details }) => {
 const { t } = useTranslation();
  return (
    <>
      <div className="p bg-white p-4">
        <div className="h5 w-100 mb-3">{t("Project Description")}</div>
        <div className="desc">{details.description}</div>
      </div>
      <div className="bg-white p-4 mt-2">
        <div className=" h5 w-100 mb-3">{t("Skill Required")}</div>
        <div className="skills d-flex flex-wrap gap-1">
          {details.skillsIds && details.skillsIds.map((skill) => {
            return (
              <div
                className="skill bg-secondary text-white py-1 px-2"
                key={skill._id}
              >
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
