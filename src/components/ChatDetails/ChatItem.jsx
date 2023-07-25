import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
const ProjectInfo = ({ isSender, message }) => {
  const { t } = useTranslation();

  return (
    <>
      <Box component="div">
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            justifyContent: isSender ? "end" : "",
          }}
        >
          <Grid item sm={10}>
            <Box
              component="div"
              sx={{ marginTop: "10px" }}
              style={{
                background: isSender ? "azure" : "#eee",
                display: "flex",
                flexDirection: "column",
                float: isSender ? "right" : "left",
                padding: "5px",
                borderRadius: "5px",
              }}
              className="project-title"
              fontSize={"15px"}
            >
              <div>{message.content}</div>
              {message.attachments.length
                ? message.attachments.map((file, index) => {
                    return (
                      <a href={file} target="_blank" key={index}>
                        File {index + 1}
                      </a>
                    );
                  })
                : ""}
              <Typography variant="span" fontSize={"9px"}>
                {moment(new Date(message.updatedAt)).fromNow()}
                <AccessTimeIcon fontSize={"9px"} />
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
      </Box>
      <br />
    </>
  );
};

export default ProjectInfo;
