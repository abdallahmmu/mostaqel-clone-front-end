import React from "react";

const ProjectInfo = () => {
  return (
    <>
      <div className="project-desc bg-white p-4">
        <div className="title h5 w-100 mb-3">Project Description</div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exer
          citationem libero, quod obcaecati consequatur blanditiis. Vitae at
          ullam doloribus? Quia?
        </div>
      </div>
      <div className="required-skills bg-white p-4 mt-2">
        <div className="title h5 w-100 mb-3">Skill Required</div>
        <div className="skills d-flex flex-wrap gap-1">
          <div className="skill bg-secondary text-white py-1 px-2">Skill1</div>
          <div className="skill bg-secondary text-white py-1 px-2">Skill1</div>
          <div className="skill bg-secondary text-white py-1 px-2">Skill1</div>
          <div className="skill bg-secondary text-white py-1 px-2">Skill1</div>
          <div className="skill bg-secondary text-white py-1 px-2">Skill1</div>
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;
