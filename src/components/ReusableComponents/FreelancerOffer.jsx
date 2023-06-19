import React from "react";
import { Box, Grid, Typography, Avatar, Rating } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
function FreelancerOffer() {
  return (
    <Grid
      xs={8}
      sx={{
        backgroundColor: "white",
        display: "flex",
        marginTop: "16px",
        padding: "10px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            {/* image Box */}
            <Box>
              <Avatar
                variant="square"
                src="http://127.0.0.1:3300/Freelancers-Avatars/avatar58.57365761819463-Angular-removebg-preview.png"
              />
            </Box>
            {/* Typo Box */}
            <Box>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "0",
                }}
              >
                Abdallah Muhammed{" "}
                <span style={{ fontSize: "16px", fontWeight: "normal" }}>
                  .@abdallahmmu
                </span>
              </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Rating name="read-only" value={4} max={5} readOnly />
                <Typography>3.9</Typography>
                <Typography sx={{ margin: "0px 10px" }}>
                  <MessageIcon color="warning" /> 511
                </Typography>
                <Typography>
                  <AttachMoneyIcon color="success" /> 511
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Sallaery */}
          <Box>
            <Typography variant="h5" component="p">
              $ 30.00 AUD
            </Typography>
          </Box>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <Typography sx={{ fontSize: "13px", width: "80%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vitae
            voluptatem, non dolorem esse ut ex velit dolores sint fugit
            repellat, sed nihil. Dolores quod facere ex commodi dolor nam?
          </Typography>
          <div>
            <Typography
              variant="span"
              sx={{ fontSize: "15px", textAlign: "center" }}
              component="span"
            >
              {" "}
              Replaies withn an hour
            </Typography>
            <Typography
              variant="span"
              sx={{ fontSize: "15px", textAlign: "center" }}
              component="span"
            >
              <br/>
              Report
            </Typography>
          </div>
        </Box>
      </Box>
    </Grid>
  );
}

export default FreelancerOffer;
