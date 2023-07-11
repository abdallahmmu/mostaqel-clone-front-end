import React, { useCallback, useContext } from "react";
import {
  CssBaseline,
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Hidden,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthSlice/authSlice";
import { useTranslation } from "react-i18next";
import { langContext } from "./../../contextAPI/context.jsx";

export default function NavigationMUI() {
  const [open, setOpen] = React.useState(false);
  const { isAuth, userData } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const { lang, changeLang } = useContext(langContext);
  const { t } = useTranslation();
  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onLogoutHandler = useCallback(() => {
    dispatch(authActions.logoutHandler());
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="sticky" open={open}>
        <Container maxWidth="lg">
          <CssBaseline />
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              sx={{ flexGrow: 1 }}
              component="div"
            >
              {t("Mostaqel Clone")}
            </Typography>
            <Hidden mdDown>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10ox",
                  marginRight: "10px",
                }}
              >
                {!isAuth && (
                  <NavLink to="/">
                    <Typography
                      sx={{
                        padding: "10px",
                        color: "white",
                        fontWeight: "semibold",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          transition: ".2s ease-in-out",
                        },
                      }}
                    >
                      {t("Home")}
                    </Typography>
                  </NavLink>
                )}
                {isAuth && userData.role === "client" && (
                  <NavLink to="/add-projects">
                    <Typography
                      sx={{
                        padding: "10px",
                        color: "white",
                        fontWeight: "semibold",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          transition: ".2s ease-in-out",
                        },
                      }}
                    >
                      <AddIcon />
                      {t("Add Project")}
                    </Typography>
                  </NavLink>
                )}
                <NavLink to="/projects">
                  <Typography
                    sx={{
                      padding: "10px",
                      color: "white",
                      fontWeight: "semibold",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                        transition: ".2s ease-in-out",
                      },
                    }}
                  >
                    {isAuth && <TroubleshootIcon />}
                    {t("Find Project")}
                  </Typography>
                </NavLink>
                {isAuth && (
                  <NavLink to={`/profile/statistics/${userData.id}`}>
                    <Typography
                      sx={{
                        padding: "10px",
                        color: "white",
                        fontWeight: "semibold",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          transition: ".2s ease-in-out",
                        },
                      }}
                    >
                      <Person2Icon />
                      {userData.username || userData.userName}
                    </Typography>
                  </NavLink>
                )}
                {!isAuth && (
                  <NavLink to="/contact">
                    <Typography
                      sx={{
                        padding: "10px",
                        color: "white",
                        fontWeight: "semibold",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          transition: ".2s ease-in-out",
                        },
                      }}
                    >
                      {t("Contact Us")}
                    </Typography>
                  </NavLink>
                )}
                {!isAuth && (
                  <NavLink to="/about">
                    <Typography
                      sx={{
                        padding: "10px",
                        color: "white",
                        fontWeight: "semibold",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          transition: ".2s ease-in-out",
                        },
                      }}
                    >
                      {t("About")}
                    </Typography>
                  </NavLink>
                )}
              </Box>
              {!isAuth && (
                <NavLink to="/login">
                  <IconButton
                    color="inherit"
                    sx={{
                      border: "1px solid white",
                      borderRadius: "0px",
                      marginRight: "10px",
                      marginLeft: "10px",
                      color: "#fff",
                    }}
                  >
                    <Typography sx={{ padding: "0px 5px" }}>
                      {t("Login")}
                    </Typography>
                    <LogoutIcon />
                  </IconButton>
                </NavLink>
              )}
            </Hidden>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              size="medium"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
        variant="persistent"
        anchor={lang == "en" ? "right" : "left"}
        open={open}
      >
        <Box sx={{ display: "flex", alignItems: "center", padding: "10px" }}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6">{t("Mostaqel-clone")}</Typography>
        </Box>
        <ListItem
          disablePadding
          onClick={() => {
            changeLang();
          }}
        >
          <ListItemButton>
            <ListItemIcon>{t("Change Lang")}</ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Divider />

        {!isAuth && (
          <List>
            <NavLink to="/" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{ color: "#000" }} primary={t("Home")} />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="projects" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ color: "#000" }}
                    primary={t("Find Project")}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="contact" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{ color: "#000" }} primary={t("Contact Us")} />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="about" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ color: "#000" }}
                    primary={t("About Us")}
                  />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        )}

        {isAuth && (
          <List>
            <NavLink to="add-projects" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ color: "#000" }}
                    primary={t("Add Project")}
                  />
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="projects" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ color: "#000" }}
                    primary={t("Find Project")}
                  />
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink
              to={`/profile/statistics/${userData.id}`}
              onClick={handleDrawerClose}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{ color: "#000" }} primary={t("Profile")} />
                  <ListItemIcon>
                    <Person2Icon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <ListItem disablePadding onClick={onLogoutHandler}>
              <ListItemButton>
                <ListItemText primary={t("Logout")} />
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </Drawer>
    </Box>
  );
}
