import { Box, Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, json, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

export const ThankYou = () => {
  const { userData } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  const sendData = async () => {
    let amount = localStorage.getItem("amount");
    let sessionId = localStorage.getItem("sessionId");

    if (sessionId) {
      try {
        let data = await axios.post(
          `${import.meta.env.VITE_API_URL}/payment/thankyou`,
          JSON.stringify({
            mode: "deposit",
            amount,
            sessionId,
            clientId: userData.id,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        title: "No Session in localStorage",
      });
      // navigate('/')
    }
  };

  const handleThank = () => {
    sendData().then(() => Navigate('/'))
    navigate(`/payment/${userData.id}`)
    localStorage.removeItem('sessionId');
    localStorage.removeItem('amount');
  }
  return (
    <Box component="div" className="thankyou" sx={{ background: "#f0f0f0" }}>
      <Container maxWidth="lg"
        sx={{ minHeight: "100vh", textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container
          sx={{ padding: "20px", textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>

          <Typography mb={5} component="h1" fontSize={30}>
            Thank you for Depositing
          </Typography>
          <Typography component="div">

          <Button   sx={{width: '200px'}} variant='contained' onClick={handleThank}>thank you </Button>
          </Typography>

        </Grid>
      </Container>
    </Box>

  )
}
