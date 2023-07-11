import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useFormik } from "formik";
import { validate } from "./validate.js";
import { updateOffer } from "./helper.js";
import { useSelector } from "react-redux";
import OfferForm from "./OfferForm.jsx";

function EditOffer({ offer, open, onClose, onSubmit }) {
  const token = useSelector((state) => state.authSlice.userData.token);

  const formik = useFormik({
    initialValues: {
      amount: offer.amount,
      duration: offer.duration,
      description: offer.description,
    },
    validate,
    onSubmit: (values) => {
      onSubmit(values);
      updateOffer(values, token, offer._id);
    },
  });

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        lg: {
          width: "130%",
        },
      }}
    >
      <DialogTitle>Edit Your Offer</DialogTitle>
      <div className="bg-white p-5 mt-2 ">
        <OfferForm formik={formik} handleClose={handleClose} EditOffer={true} />
      </div>
    </Dialog>
  );
}

const MyOffer = ({ offer, setMyOffer }) => {
  const [open, setOpen] = React.useState(false);
  let values = ["amount", "duration", "description"];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (values) => {
    setMyOffer({ ...offer, ...values });
    setOpen(false);
  };
  return (
    <>
      <div className="mt-3">
        <TableContainer component={Paper} className="p-5">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan="2">
                  <h5>Your Offer</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.map((value) => (
                <TableRow
                  key={value}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {value}
                  </TableCell>
                  <TableCell align="right">{offer[value]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Button variant="outlined bg-primary text-white" onClick={handleClickOpen}>
            Edit Your Offer
          </Button>
        </TableContainer>
      </div>

      <EditOffer
        offer={offer}
        open={open}
        onClose={handleClose}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      />
    </>
  );
};

export default MyOffer;
