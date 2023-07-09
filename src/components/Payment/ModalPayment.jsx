import React from "react";
import {
  Modal,
  Typography,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
  FilledInput,
  FormHelperText,
  Button,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ModalPayment({ open, closeModal, role }) {
  return (
    <Modal
      open={open}
      onClose={() => closeModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Your Payment
        </Typography>

        <Box
          component="div"
          sx={{ display: "flex", flexDirection: "column", my: 3 }}
        >
          <TextField sx={{ m: 1 }} label="Full Name" />
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <FormControl sx={{ m: 1, flex: 1 }} variant="filled">
              <FilledInput
                id="filled-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Visa Card</InputAdornment>
                }
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="filled">
              <FilledInput
                id="filled-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">CCV</InputAdornment>
                }
                aria-describedby="filled-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <hr/>
        <Box sx={{my:3}}>
            <Typography variant="p" sx={{fontWeight:'bold', fontSize:14}}>Total Amount After Pay Will be (Amount * 2.5% tax)</Typography>
            <Typography sx={{textAlign:'center' ,mt:5,color:'green',fontSize:24}}>$ 50</Typography>
        </Box>
        <Box sx={{my:3,textAlign:'end'}}>
     <Button variant="contained" sx={{mx:3}} color="success">Pay Now</Button>
     <Button variant="contained" color="success">Withdraw</Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalPayment;
