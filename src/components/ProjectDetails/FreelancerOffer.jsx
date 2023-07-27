import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Avatar, Rating } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { hireFreelancer, sendMessage } from "./helper.js";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SwipeRightIcon from "@mui/icons-material/SwipeRight";
import PaymentsIcon from "@mui/icons-material/Payments";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function FreelancerOffer({ offer, isOwner, status, winningOffer, title }) {
  const {
    _id,
    freelancerId,
    updatedAt,
    description,
    amount,
    duration,
    attachments,
  } = offer;
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("isAuth"))?.["token"];

  const [hired, setHired] = useState(false);

  useEffect(() => {
    console.log("hired");
  }, [hired]);

  const handleHired = () => {
    setHired(true);
  };
  return (
    <Grid
      sx={{
        backgroundColor: "white",
        marginTop: "16px",
        marginBottom: "16px",
        padding: "20px",
        direction: "ltr",
      }}
      style={{ backgroundColor: _id == winningOffer ? "antiquewhite" : "" }}
    >
      <div className="d-flex flex-lg-row flex-md-column justify-content-lg-between ">
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
        >
          {/* image Box */}
          <Box>
            {freelancerId.avatar ? (
              <Avatar
                alt="Remy Sharp"
                src={freelancerId.avatar}
                lg={{ width: 100, height: 100 }}
                md={{ width: 50, height: 50 }}
              />
            ) : (
              <Avatar
                lg={{ width: 1000, height: 1000 }}
                md={{ width: 50, height: 50 }}
              >
                {freelancerId.firstName.slice(0, 1)}
              </Avatar>
            )}
          </Box>
          {/* Typo Box */}
          <Box>
            <Link to={`/freelancer/${freelancerId._id}`}>
              {" "}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "0",
                }}
              >
                {freelancerId.firstName} {freelancerId.lastName}
              </p>
            </Link>
            <p className="  opacity-50 ">{freelancerId.jobTitle}</p>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                padding: "0 30px ",
              }}
            >
              {description}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                padding: "0 30px ",
              }}
            >
              {isOwner &&
                attachments.length &&
                attachments.map((file, index) => {
                  return (
                    <a href={file} key={index} target="_blank">
                      File {index + 1}
                    </a>
                  );
                })}
            </Box>
          </Box>
        </Box>
        <Box>
          {isOwner && (
            <>
              <div className="text-center mb-2">
                <button
                  className="btn"
                  onClick={() => {
                    sendMessage(token, freelancerId._id, title, navigate);
                  }}
                >
                  <MessageIcon />
                </button>
                <button
                  style={{ display: status == "open" ? "" : "none" }}
                  className="btn"
                  onClick={() => {
                    hireFreelancer(token, _id, title, navigate);
                    handleHired();
                  }}
                >
                  <PaymentsIcon />
                </button>
              </div>

              <h4 className="text-center mb-2">
                {amount}
                <AttachMoneyIcon /> Within {duration} days
              </h4>
            </>
          )}

          <p className="  opacity-50 ">
            Last updated {moment(new Date(updatedAt)).fromNow()}
          </p>
        </Box>
      </div>
    </Grid>
  );
}

export default FreelancerOffer;
// <Rating name="read-only" value={4} max={5} readOnly />
// <Typography>3.9</Typography>
// <Typography sx={{ margin: "0px 10px" }}>
//   <MessageIcon color="warning" /> 511
// </Typography>
// <Typography>
//   <AttachMoneyIcon color="success" /> 511
// </Typography>
