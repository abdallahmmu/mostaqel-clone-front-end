import React from "react";
import ProjectsListSingleProject from "./ProjectsListSingleProject";
import { Box } from "@mui/material";

const ProjectsItemsList = ({ project }) => {
  return (
    <Box component='div' className="projects-list-side">
      <ProjectsListSingleProject project={project} />
    </Box>
  );
};

export default ProjectsItemsList;
