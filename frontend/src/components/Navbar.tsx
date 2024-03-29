import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  IconButton,
  SwipeableDrawer,
  Container,
  Button,
  Avatar,
  Slide,
} from "@mui/material";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProfileTooltip from "./Tooltip/ProfileTooltip";
import { PrimaryCategories, mobileLists } from "../data/DummyData";
import { ThemeContext } from "./Utils/ThemeContext/ThemeContext";
import { motion } from "framer-motion";

const listContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

const list = {
  hidden:{
    opacity:0,
    y:5
  },
  visible:{
    opacity:1,
    y:0,
    transition:{
      duration:0.5,
      type:"spring",
      ease:"easeInOut"
    }
  }
}

const Navbar = () => {
  const { themeMode, handleThemeToggle } = useContext(ThemeContext);
  const [showAppBar, setShowAppBar] = useState(true);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const isNonMobileScreen = useMediaQuery(theme.breakpoints.up("md"));
  const lowSm = useMediaQuery(theme.breakpoints.down("sm"));
  const is4k = useMediaQuery(theme.breakpoints.up("xl"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const closeDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const light = themeMode === "light";

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const show = currentScrollPos < 100;
    setShowAppBar(show);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <Slide direction="down" in={showAppBar}>
      <AppBar
        sx={{
          bgcolor: light ? "inherit" : "#0A1929",
          color: light ? "black" : "white",
          px: is4k ? "1%" : "",
          position: "sticky",
          top: 0,
          zIndex: 50,
          opacity: 0.9,
        }}
        position="static"
        elevation={2}
      >
        <Toolbar sx={{height:{
           xs: "80px",
           sm: "75px",
           md: "65px",
           lg: "65px",
        },
        overflow:"hidden"}}>
          <Box sx={{ flexGrow: 1 }}>
            <Link to={"/"}>
              <Box
                sx={{
                  width: {
                    xs: "120px",
                    md: "110px",
                    lg: "140px",
                  },
                  height: {
                    xs: "80px",
                    sm: "75px",
                    md: "65px",
                    lg: "65px",
                  },
                  pr: {
                    xs: 3,
                    sm: 3,
                    md:2
                  },
                  pt: {
                    xs: 2,
                  },
                  pb:{
                    xs:2,
                    sm:2,
                    md:0
                  },
                  mb:{
                    sm:"0px",
                    md:2
                  },display:"flex",alignItems:"center",justifyContent:"center",
              
                  mt:{
                    sm:0.5,
                    md:1,
                    lg:2
                  }
                }}
                overflow="hidden"
                component="div"
              >
                <Box width={"100%"}>
                <img width={"100%"} src={"/Logo.svg"} alt="logo" />
                </Box>
                <Typography sx={{
                  fontSize:{
                    xs:14
                  }
                }} color={light ? "warning.dark" : "warning.main"} fontWeight={"bolder"}> Auction</Typography>
              </Box>
            </Link>
          </Box>
          {/*Deskto Nav */}
          {isNonMobileScreen && (
            <Box
              display={"flex"}
              alignItems="center"
              justifyContent={"center"}
              gap={{
                md: 5,
                lg: 6,
                xl: 8,
              }}
              paddingRight={{ md: 3, lg: 4, xl: 6 }}
            >
              <Link to={"/"}>
                <Typography color={light ? "black" : "white"}>
                  Auctions
                </Typography>
              </Link>
              <Box
                aria-owns={open ? "mouse-over-popover" : undefined}
                aria-haspopup="true"
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    color: light ? "black" : "white",
                  }}
                  endIcon={<ExpandMoreIcon />}
                >
                  Auctions Categories
                </Button>
                <Popover
                  open={open}
                  id="mouse-over-popover"
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <List sx={{ width: "200px" }} component={motion.li} variants={listContainer} initial="hidden" whileInView="visible">
                    {PrimaryCategories.map((option) => (
                      <Box key={`${option.id}`}>
                        <Link to={`${option.path}`}>
                          <ListItem disablePadding>
                            <ListItemButton disableRipple>
                              <ListItemText
                                primary={<Typography component={motion.p} 
                                variants={list}>{option.name}</Typography>}
                                sx={{
                                  color: light ? "black" : "white",
                                  "&:hover": {
                                    color: "warning.dark",
                                  },
                                }}
                              />
                            </ListItemButton>
                          </ListItem>
                        </Link>
                      </Box>
                    ))}
                  </List>
                </Popover>
              </Box>
              <IconButton color="inherit" onClick={handleThemeToggle}>
                {themeMode === "light" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeIcon />
                )}
              </IconButton>
              {/* {isLogin && <ProfileTooltip />} */}
              {/* {!isLogin && (
              <Stack
                direction={"row"}
                spacing={4}
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ border: 1, borderColor: "error.dark" }}
                  />
                }
              >
                <Link to={"/signup"}>
                  <Typography color={"black"}>Sing Up</Typography>
                </Link>

                <Link to={"/login"}>
                  <Typography color={"black"}>Log In</Typography>
                </Link>
              </Stack>
            )} */}
            </Box>
          )}

          {/*Mobile Navigation */}

          {!isNonMobileScreen && (
            <IconButton onClick={closeDrawer} sx={{padding:0}}>
              <MenuIcon fontSize={lowSm ? "large" : "large"} />
            </IconButton>
          )}
        </Toolbar>
        <Searchbar />
        <SwipeableDrawer
          open={openDrawer}
          onOpen={() => {}}
          onClose={closeDrawer}
        >
          <List
            disablePadding
            sx={{
              width: {
                xs: 150,
                sm: 250,
              },
              bgcolor: light ? "" : "grey.700",
              height: "100vh",
            }}
          >
            {mobileLists.map((list) => (
              <Box key={`${list.id}`}>
                <ListItem
                  sx={{
                    "&:hover": {
                      bgcolor: "#e0e0e0",
                    },
                  }}
                >
                  <Link to={`${list.path}`}>
                    <ListItemText
                      primary={
                        <Typography
                          fontSize={lowSm ? 12 : 14}
                          color={light ? "black" : "white"}
                        >
                          {list.name}
                        </Typography>
                      }
                    />
                  </Link>
                </ListItem>
                <Divider />
              </Box>
            ))}
            <ListItemButton
              sx={{ display: "flex", gap: 0.6, alignItems: "center" }}
              onClick={handleThemeToggle}
            >
              {themeMode === "light" ? (
                <DarkModeIcon fontSize="small" />
              ) : (
                <DarkModeOutlinedIcon />
              )}
              {`${themeMode}`} Mode
            </ListItemButton>
          </List>
        </SwipeableDrawer>
      </AppBar>
    </Slide>
  );
};

export default Navbar;
