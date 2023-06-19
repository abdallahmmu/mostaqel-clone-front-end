import React from "react";

const ProjectInfo = ({ details }) => {
  let skills = ["html", "css", "js", "react"];
  return (
    <>
      <div className="p bg-white p-4">
        <div className="h5 w-100 mb-3">Project Description</div>
        <div className="desc">{details.description}</div>
      </div>
      <div className="bg-white p-4 mt-2">
        <div className=" h5 w-100 mb-3">Skill Required</div>
        <div className="skills d-flex flex-wrap gap-1">
          {skills.map((skill) => {
            return (
              <div
                className="skill bg-secondary text-white py-1 px-2"
                key={skill}
              >
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
