import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import UpperPaymenComponent from "../components/Payment/UpperPaymenComponent";
import CardPayment from "../components/Payment/CardPayment";
import { useLoaderData } from "react-router-dom";

function Payment() {
  const { userData } = useSelector((state) => state.authSlice);
  const {data} = useLoaderData()
  return (
    <Box component="div" sx={{ background: "#f0f0f0" }}>
      <Container maxWidth="lg" sx={{minHeight:'100vh' }}>
        <Grid container sx={{ padding: "20px"}}>
          <UpperPaymenComponent userData={userData} />
          <CardPayment userData={userData} />
        </Grid>
      </Container>
    </Box>
  );
}

export default Payment;
