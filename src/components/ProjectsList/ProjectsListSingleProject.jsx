import React, { useContext } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useTranslation } from "react-i18next";
import { langContext } from "../../contextAPI/context";

const ProjectsListSingleProject = ({ project }) => {
  const { t } = useTranslation();
  const { lang } = useContext(langContext);
  const timeAgo = moment(project.createdAt)
    .startOf("second")
    .fromNow()
    .split(" ");

  return (
    <Box component="div" className="project">
      <Grid container spacing={2}>
        <Grid item sm={10}>
          <Box
            component="div"
            sx={{ marginTop: "10px" }}
            style={{ display: "flex", justifyContent: "space-between" }}
            className="project-title"
          >
            <Link to={project._id}>{project.title}</Link>
          
          </Box>
         

          <Box component="div" className="project-info ">
            <Typography variant="span" className="client-name">
              {project.clientId.firstName} <PersonIcon sx={{ fontSize: 15 }} />
            </Typography>

            <Typography variant="span" className="prject-date">
              {lang == "ar"
                ? `${t(timeAgo[2])} ${t(timeAgo[0])} ${t(timeAgo[1])} `
                : timeAgo.join(" ")}
              <AccessTimeIcon sx={{ fontSize: 15 }} />
            </Typography>

            <Typography variant="span" className="project-offers">
              {project.categoryId?.title}{" "}
              <BorderColorIcon sx={{ fontSize: 15 }} />
            </Typography>
          </Box>

          <Box
            component="p"
            sx={{ marginTop: "20px" }}
            className="project-excerpt"
          >
            <Typography variant="p">{project.description}</Typography>
          </Box>

          <Box>
            {project.files && project.files.map((file, index) => (
              <Link to={file} key={index}> {file}</Link>
            ))}
          </Box>

          <Box component="div">
            {project.skillsIds.map((skill, index) => (
              <Typography
                key={index}
                variant="span"
                fontSize={11}
                style={{ padding: "8px" }}
                className="bg-primary me-2  text-white rounded"
              >
                {skill.name}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
      {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
    </Box>
  );
};

export default ProjectsListSingleProject;
