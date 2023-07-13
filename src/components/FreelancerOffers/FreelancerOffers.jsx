import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { fetchMyOffers } from "./helpers.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../UI_Helpers/LoadingSpinner";
import { useTranslation } from "react-i18next";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
} from "@mui/material";

const FreelancerOffers = () => {
  const { t } = useTranslation();

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.authSlice.userData?.token);
  const navigate = useNavigate();
  useEffect(() => {
    fetchMyOffers(setOffers, token, navigate, setLoading);
  }, []);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Typography variant="h6" sx={{ p: 3, fontWeight: "bold" }}>
                Freelancers Offers
              </Typography>
              <Box component="div" sx={{ p: 3 }}>
                {offers.length ? (
                  <ul className="list-group">
                    {offers.map(
                      ({ amount, duration, projectId, updatedAt }, index) => {
                        return (
                          <Card
                          elevation={1}
                            sx={{ backgroundColor: "white", p: 1, mb: 3 }}
                            key={index}
                          >
                            <CardContent>
                              <Box sx={{display:'flex',justifyContent:'space-between'}} component="div">
                                <Typography variant="p">
                                  <Link to={`/projects/${projectId._id}`}>
                                    {projectId.title.toUpperCase()}
                                  </Link>
                                </Typography>
                              </Box>
                              <Typography>
                              $ {amount} {t("within")} {duration} {t("days")} {" "}
                                <Typography  variant='span' sx={{opacity:'.5'}}>
                                  last update{" "}
                                  {moment(new Date(updatedAt)).fromNow()}
                                </Typography>
                              </Typography>
                            </CardContent>
                          </Card>
                        );
                      }
                    )}
                  </ul>
                ) : (
                  <Card sx={{ backgroundColor: "white" }}>
                    {t("You Don't Have Any Offer Before")}
                    <Link to="/projects"> {"Go To Apply"}</Link>
                  </Card>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default FreelancerOffers;
