import React, { useEffect, useState } from "react";
import ProjectsListTitle from "../components/ProjectsList/ProjectsListTitle";
import ProjectsItemsList from "../components/ProjectsList/ProjectsItemsList";
import ProjectsListPagination from "../components/ProjectsList/ProjectsListPagination";
import ProjectsListFilter from "../components/ProjectsList/ProjectsListFilter";
import "../components/ProjectsList/ProjectList.css";
import { SentimentVeryDissatisfied } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../store/ProjectsSlice/ProjectsSlice";
import { useParams, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../components/UI_Helpers/LoadingSpinner";
import { Box, Typography } from "@mui/material";
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
    <div className="projects-list">
      <div className="container">
        <ProjectsListTitle />
        <div className="row">
          <div className="col-md-3">
            <ProjectsListFilter />
          </div>
          <div className="col-md-9">
            {!isLoading ?
              (projects.length ?

                projects.map((project, index) => (


                  <ProjectsItemsList key={index} project={project} />


                ))
                :
                (
                  <Box fontSize={30} style={{ textAlign: 'center' }}>
                    <SentimentVeryDissatisfied  />
                    <Typography fontSize={30} style={{ textAlign: 'center' }}>
                      no projects fit your requests
                    </Typography>
                  </Box>
                )
              )
              :
              (
                <LoadingSpinner />
              )}
            <ProjectsListPagination paginationData={paginationData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsList;
