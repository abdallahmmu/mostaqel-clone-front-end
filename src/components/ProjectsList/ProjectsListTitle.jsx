import React from "react";
import { useState } from "react";
import { getAllProjects } from "../../store/ProjectsSlice/ProjectsSlice";
import { useDispatch } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ProjectsListTitle = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("latest");
  const [isOpen, setIsOpen] = useState(false);

  const getLatestProjects = (sortBy) => {
    setSort(sortBy);
    setIsOpen((prev) => !prev);
    dispatch(getAllProjects({ sort: sortBy }));
  };
  return (
    <div className="page-title">
      <Typography variant="h5" sx={{ margin: "4rem 0px" }}>
        Open Projects
      </Typography>
      <Box component='div' className="projects-filter">
        <Button
          variant="contained"
          onClick={() => setIsOpen((prev) => !prev)}
          endIcon={<ArrowDropDownIcon />}
        >
          {sort}
        </Button>
        {isOpen && (
          <Box
          component='div'
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "10px",
              background: "#fff",
              border: "1px solid #ccc",
              position: "absolute",
              zIndex:'99',
              width: "130px",
            }}
          >
            <Typography
              onClick={() => getLatestProjects("createdAt")}
              sx={{
                cursor: "pointer",
                "&:hover": { background: "#ccc" },
                padding: "5px",
              }}
              variant="p"
            >
              Oldest
            </Typography>
            <Typography
              onClick={() => getLatestProjects("-createdAt")}
              sx={{
                cursor: "pointer",
                "&:hover": { background: "#ccc" },
                padding: "5px",
              }}
              variant="p"
            >
              Latest
            </Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default ProjectsListTitle;
