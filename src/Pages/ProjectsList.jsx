import React, { useEffect } from "react";
import ProjectsListTitle from "../components/ProjectsList/ProjectsListTitle";
import ProjectsItemsList from "../components/ProjectsList/ProjectsItemsList";
import ProjectsListPagination from "../components/ProjectsList/ProjectsListPagination";
import ProjectsListFilter from "../components/ProjectsList/ProjectsListFilter";
import "../components/ProjectsList/ProjectList.css";

import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../store/ProjectsSlice/ProjectsSlice";
import { useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";
import { Box, Container, Grid } from "@mui/material";
const ProjectsList = () => {
  const { projects, paginationData, isLoading } = useSelector(
    (state) => state.ProjectsSlice
  );
  const dispatch = useDispatch();

  const [params] = useSearchParams();

  useEffect(() => {
    dispatch(getAllProjects({ page: params.get("page") }));
  }, [dispatch]);

  return (
    <Box className="projects-list">
      <Container maxWidth="lg">
        <ProjectsListTitle />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <ProjectsListFilter />
          </Grid>
          <Grid
            sx={{ marginBottom: "10px", minHeight: "90vh" }}
            item
            xs={12}
            md={9}
          >

            {!isLoading ? (
              projects.map((project) => (
                <ProjectsItemsList key={project._id} project={project} />
              ))
            ) : (
              <LoadingSpinner />
            )}
            <ProjectsListPagination paginationData={paginationData} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsList;
