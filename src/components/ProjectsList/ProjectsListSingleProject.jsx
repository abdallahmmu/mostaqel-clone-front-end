import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const ProjectsListSingleProject = ({ project }) => {
  return (
    <Box component='div' className="project">
      <Grid container spacing={2}>
        <Grid item sm={10}>
          <Box
            component="div"
            sx={{ marginTop: "10px" }}
            style={{display: 'flex', justifyContent: 'space-between'}}
            className="project-title"
          >
            <Link to={project._id}>{project.title}</Link>
            {/* <Typography
            
            style={{
              color: '#fff',
              padding: '5px 7px',
              borderRadius: '7px',
              backgroundColor: '#2386C8'  }}
            >
              {project.range}
             
            </Typography> */}
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

          <Box
            component="div"

          >
            {project.skillsIds.map((skill, index) => (
              <Typography
                key={index}
                variant="div"
                fontSize={11}
                style={{ padding: '8px' }}
                className="bg-primary me-2  text-white rounded">
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
