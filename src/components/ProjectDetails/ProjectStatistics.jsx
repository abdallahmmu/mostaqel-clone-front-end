import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { releaseMoney } from "./helper.js";
import { useTranslation } from "react-i18next";
import { langContext } from "../../contextAPI/context.jsx";

import { useNavigate } from "react-router-dom";
const ProjectStatistics = ({ details, isOwner }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const timeAgo = moment(details.createdAt)
    .startOf("second")
    .fromNow()
    .split(" ");
  const { lang } = useContext(langContext);
  let rows = [
    {
      name: "Project Status",
      value: details.status,
    },
    {
      name: "Publish Date",
    },
    {
      name: "Budget",
      value: `${details.range} $`,
    },
  ];
  rows[1].value =
    lang == "ar"
      ? `${t(timeAgo[2])} ${t(timeAgo[0])} ${t(timeAgo[1])} `
      : timeAgo.join(" ");

  return (
    <>
      <div className="col-lg-3 d-lg-block d-md-none">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  <h5>{t("Project Card")}</h5>
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
                    {t(row.name)}
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{
                      direction: row.name == "Publish Date" ? "ltr" : "",
                    }}
                  >
                    {t(row.value)}
                  </TableCell>
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
                      <h5>{t("Winning Offer")}</h5>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {t("Amount")}
                    </TableCell>
                    <TableCell align="right">
                      {details.offerId.amount}
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {t("duration")}
                    </TableCell>
                    <TableCell align="right">
                      {details.offerId.duration}
                    </TableCell>
                  </TableRow>

                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {t("Freelancer Name")}
                    </TableCell>
                    <TableCell align="right">
                      {details.offerId.freelancerId.username}
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
                              details.offerId?._id,
                              navigate
                            );
                          }}
                        >
                          {t("Release Money")}
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
