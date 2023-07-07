import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams, Link } from "react-router-dom";
import moment from "moment";
import { Box, Card, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const ProjectsListSingleProject = ({ project }) => {
  const params = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(params)
    // dispatch(getAllProjects())
  }, [params]);

  return (
    <Box component='div' className="project">
      
      <Grid container spacing={2}>
        <Grid item sm={10}>
          <Box
            component="div"
            sx={{ marginTop: "10px" }}
            className="project-title"
          >
            <Link to={project._id}>{project.title}</Link>
          </Box>
          <Box component="div" className="project-info ">
            <Typography variant="span" className="client-name">
              {project.clientId.firstName} <PersonIcon sx={{ fontSize: 15 }} />
            </Typography>

            <Typography variant="span" className="prject-date">
              {moment(project.createdAt).startOf("hour").fromNow()}{" "}
              <AccessTimeIcon sx={{ fontSize: 15 }} />
            </Typography>

            <Typography variant="span" className="project-offers">
              {project.categoryId.title}{" "}
              <BorderColorIcon sx={{ fontSize: 15 }} />
            </Typography>
          </Box>
          <Typography
            variant="p"
            sx={{ marginTop: "20px" }}
            className="project-excerpt"
          >
            {project.description}
            {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
          </Typography>
          <Typography
          variant="div"

          >
            {project.skillsIds.map(skill => (
              <span className="bg-dark text-white p-1 rounded">{skill.name}</span>
            ))}
          </Typography>
        </Grid>
      </Grid>
      {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
    </Box>
  );
};

export default ProjectsListSingleProject;
