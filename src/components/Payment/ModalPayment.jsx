import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  Typography,
  Box,
  FormControl,
  InputLabel,
  InputAdornment,
  FilledInput,
  Button,
} from "@mui/material";
import { addPercent } from "../../helpers/taxs";
import { depositeCredit } from "./depositPayment";
import { useLoaderData } from "react-router-dom";

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

function ModalPayment({ open, closeModal, userData }) {
  const [amount, setAmount] = useState('');
  const [loading,setLoading] = useState(false)
  const {data} = useLoaderData()
  const handelAmountCalculation = useCallback((e) => {
        setAmount(e.target.value)
  }, []);

  const onDepositCreditHandler = async ()=>{
    if(amount === ''){
      return
    }
    setLoading(true)
   const session = await depositeCredit(amount,'deposit',userData.id)
   if(session){
    localStorage.setItem('sessionId',session.sessionId)
    localStorage.setItem('amount', session.amount)
    window.location.assign(session.url)
   }
   setLoading(false)
   closeModal(false)
   setAmount(0)

  }

const handelCloseModel = () => {
  closeModal(false)
  setAmount(0)
}
  return (
    <Modal
      open={open}
      onClose={handelCloseModel}
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
          <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              type="number"
              inputProps={{min:0}}
              onChange={handelAmountCalculation}
            />
          </FormControl>
        </Box>
        <hr />
        <Box sx={{ my: 3 }}>
          <Typography variant="p" sx={{ fontWeight: "bold", fontSize: 14 }}>
            Total Amount After Pay Will be (Amount * 2.5% tax)
          </Typography>
          <Typography
            sx={{ textAlign: "center", mt: 5, color: "green", fontSize: 24 }}
          >
            $ {amount > 0 ? addPercent(+amount) : "0"}
          </Typography>
        </Box>
        {userData.role === "freelancer" && data?.totalMoney > 50 && (
          <Box sx={{ my: 3 }}>
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", fontSize: 14, color: "red" }}
            >
              You Can Not Withdrow Your Money unless it be greater than $50
            </Typography>
          </Box>
        )}
        <Box sx={{ my: 3, textAlign: "end" }}>
          <Button  variant="contained" sx={{ mx: 3 }} color="success" onClick={onDepositCreditHandler}>
            {loading ? 'Loading ...' : 'Pay Now'}
          </Button>
          {data?.totalMoney > 50 && (
            <Button variant="contained" color="success">
              Withdraw
            </Button>
          )}
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalPayment;
