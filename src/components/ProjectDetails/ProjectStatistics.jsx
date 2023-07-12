import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { releaseMoney } from "./helper.js";

const ProjectStatistics = ({ details, isOwner }) => {
  let rows = [
    {
      name: "Project Status",
      value: details.status,
    },
    {
      name: "Publish Date",
      value: moment(new Date(details.createdAt)).fromNow(),
    },
    {
      name: "Budget",
      value: `${details.range} $`,
    },
  ];

  let accptedProject = [
    // {
    //   name: "Client Name",
    //   value: details.clientId.userName,
    // },
    {
      name: "Freelancer Name",
      // value: details.offerId.freelancerId.
    },
    {
      name: "Budget",
      value: `${details.range} $`,
    },
  ]
  return (
    <>
      <div className="col-lg-3 d-lg-block d-md-none">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={6}>
                  <h5> Project Card</h5>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {details.offerId && (
          <>
            <hr />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={6}>
                      <h5>Winning Offer</h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      Amount
                    </TableCell>
                    <TableCell align="right">
                      {details.offerId.amount}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      duration
                    </TableCell>
                    <TableCell align="right">
                      {details.offerId.duration}
                    </TableCell>
                  </TableRow>
                  {isOwner && details.status == "pending" && (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell colSpan={6} className="text-center">
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            releaseMoney(
                              details.offerId.freelancerId?._id,
                              details.clientId?._id,
                              details.offerId?._id
                            );
                          }}
                        >
                          Release Money
                        </button>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </div>
    </>
  );
};

export default ProjectStatistics;
