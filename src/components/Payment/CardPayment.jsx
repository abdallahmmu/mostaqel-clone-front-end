import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
function CardPayment({ userData }) {
  return (
    <Grid item sm={12}>
      <Box
        component="div"
        sx={{
          display: "flex",
          margin: "20px 0px",
          width:'100%'
        }}
      >
        <Card sx={{ width:'100%', borderRadius: 1 }}>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h6">Toatal Payment Available</Typography>
            <Typography variant="body2">
              @{userData.username || userData.userName}
            </Typography>
            <br />
            <Typography variant="span">$ 50</Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
}

export default CardPayment;
