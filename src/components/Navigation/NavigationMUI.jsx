import React, { useCallback, useContext, useEffect, useRef } from "react";
import io from "socket.io-client";
import Swal from "sweetalert2";
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
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Hidden,
  Container,
  MenuItem,
  Menu,
  Badge,
  Paper,
  TableRow,
  TableCell,
  Table,
} from "@mui/material";
import moment from "moment";

import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthSlice/authSlice";
import { useTranslation } from "react-i18next";
import { langContext } from "./../../contextAPI/context.jsx";
import axios from "axios";

export default function NavigationMUI() {
  const [open, setOpen] = React.useState(false);

  const socket = useRef(null);
  const [notification, setNotification] = React.useState([]);
  const [notRead, setNotRead] = React.useState([]);
  const { isAuth, userData } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const { lang, changeLang } = useContext(langContext);
  const { t } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState({
    messages: null,
    general: null,
  });
  const show = [Boolean(anchorEl.messages), Boolean(anchorEl.general)];
  const handleClick = (event) => {
    anchorEl[event.currentTarget.name] = event.currentTarget;
    setAnchorEl({ ...anchorEl });
  };
  const handleClose = () => {
    setAnchorEl({ messages: null, general: null });
  };

  const handleDrawerOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onLogoutHandler = useCallback(() => {
    dispatch(authActions.logoutHandler());
  }, []);

  useEffect(() => {
    if (userData.id) {
      fetch(`${import.meta.env.VITE_API_URL}/notifications/${userData.id}`)
        .then((res) => res.json())
        .then((data) => {
          setNotification(data.results.reverse());
          const newSocket = io("http://localhost:3300/notification");
          socket.current = newSocket;
          // Join the chat room
          socket.current.emit("LogIn", userData.id);
        });
    }
    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [isAuth]);
  useEffect(() => {
    if (socket.current) {
      // Listen for incoming messages
      socket.current.on("newNotification", (newNotification) => {
        console.log("New notification received", newNotification);
        setNotification([newNotification, ...notification]);
        Swal.mixin({
          toast: true,
          animation: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        }).fire({
          title: newNotification.content,
          icon: "info",
        });
      });
    }
  });
  useEffect(() => {
    setNotRead([
      notification.filter(
        (n) => n.status == false && n.relatedTo === "messages"
      ).length,
      notification.filter(
        (n) => n.status == false && n.relatedTo !== "messages"
      ).length,
    ]);
    console.log(notification);
  }, [notification]);
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
              <Link to="/" className="text-white">
                {t("Mostaqel Clone")}
              </Link>
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
                  <>
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
                    <IconButton
                      size="large"
                      aria-label="show 4 new mails"
                      name="messages"
                      color="inherit"
                      aria-controls={show[0] ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={show[0] ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <Badge badgeContent={notRead[0]} color="error">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl.messages}
                      open={show[0]}
                      onClose={handleClose}
                      style={{ transition: ".2s ease-in-out" }}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {notification
                        .filter((n) => n.relatedTo === "messages")

                        .slice(0, 5)
                        .map((item, index) => {
                          return (
                            <p
                              key={index}
                              onClick={handleClose}
                              style={{
                                fontSize: "14px",
                                width: "400px",
                                padding: "5px 0px 0px 10px",
                                borderBottom: "1px solid #eee",
                              }}
                            >
                              {item.content}
                              <span style={{ fontSize: "10px", opacity: ".5" }}>
                                {" "}
                                {moment(new Date(item.createdAt)).fromNow()}
                              </span>
                            </p>
                          );
                        })}
                      <div className="d-flex justify-content-between px-2 py-1">
                        <Button
                          onClick={async () => {
                            await axios.patch(
                              `${import.meta.env.VITE_API_URL}/notifications/${
                                userData.id
                              }/messages`
                            );
                            setNotRead([0, notRead[1]]);
                          }}
                        >
                          <MarkEmailReadIcon></MarkEmailReadIcon> Mark As Read
                        </Button>
                        <Button>
                          {" "}
                          <Link to="/chats/">
                            <NotificationsActiveIcon /> See All Notifications
                          </Link>
                        </Button>
                      </div>
                    </Menu>
                    <IconButton
                      size="large"
                      color="inherit"
                      id="basic-button"
                      name="general"
                      aria-controls={show[1] ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={show[1] ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <Badge badgeContent={notRead[1]} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl.general}
                      open={show[1]}
                      onClose={handleClose}
                      style={{ transition: ".2s ease-in-out" }}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <Table component={Paper}>
                        {notification
                          .filter((n) => n.relatedTo !== "messages")

                          .slice(0, 5)
                          .map((item, index) => {
                            return (
                              <TableRow
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell component="th" scope="row">
                                  {item.content}
                                </TableCell>
                                <TableCell align="right">
                                  {" "}
                                  {moment(new Date(item.createdAt)).fromNow()}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        <TableRow>
                          <TableCell component="th" scope="row">
                            {" "}
                            <Button
                              onClick={async () => {
                                await axios.patch(
                                  `${
                                    import.meta.env.VITE_API_URL
                                  }/notifications/${userData.id}`
                                );
                                setNotRead([notRead[0], 0]);
                              }}
                            >
                              <MarkEmailReadIcon></MarkEmailReadIcon> Mark As
                              Read
                            </Button>
                          </TableCell>
                          <TableCell align="right">
                            {" "}
                            <Button>
                              {" "}
                              <Link to="/notifications/">
                                <NotificationsActiveIcon /> See All
                                Notifications
                              </Link>
                            </Button>
                          </TableCell>
                        </TableRow>
                      </Table>
                    </Menu>
                  </>
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
                  <ListItemIcon sx={{ color: "#000" }}>
                    {t("Home")}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="projects" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#000" }}>
                    {t("Find Project")}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="contact" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#000" }}>
                    {t("Contact Us")}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="about" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#000" }}>
                    {t("About Us")}
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        )}

        {isAuth && (
          <List>
            <NavLink to="add-projects" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemIcon sx={{ color: "#000" }}>
                    {t("Add Project")}
                  </ListItemIcon>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="projects" onClick={handleDrawerClose}>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemIcon sx={{ color: "#000" }}>
                    {t("Find Project")}
                  </ListItemIcon>
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
                <ListItemButton
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemIcon sx={{ color: "#000" }}>
                    {t("Profile")}
                  </ListItemIcon>
                  <ListItemIcon>
                    <Person2Icon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </NavLink>

            <ListItem disablePadding onClick={onLogoutHandler}>
              <ListItemButton
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <ListItemIcon sx={{ color: "#000" }}>
                  {t("Logout")}
                </ListItemIcon>
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
