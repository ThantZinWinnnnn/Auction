import React, { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion} from "framer-motion"
import {
  OutlinedInput,
  Box,
  Button,
  Typography,
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useQuery } from "@tanstack/react-query";
import { userInfoAPI } from "./Utils/endpoins/axios";
import { ProfileUserProps } from "./Utils/apiTypes/apiTypes";
import BidButton from "./BiddingComponent/Components/BidButton";
import { IntroMenu } from "../data/DummyData";
import { ThemeContext } from "./Utils/ThemeContext/ThemeContext";

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

const Searchbar = () => {
  const { themeMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null | undefined>(
    null || undefined
  );
  const [values, setValues] = useState<string | null>(null || "");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const light = themeMode === "light";

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const {
    isLoading: userFetchLoading,
    data,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: userInfoAPI.getLoggedInUser,
    refetchOnWindowFocus: false,
  });

  const user: ProfileUserProps = data?.data;

  const searchHandler = () => {
    //api call
    console.log("values", values);
    navigate(`/query/product/${values}`);
    setValues("");
  };

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        mx: "auto",
        paddingX: {
          xs: 0,
          sm: 2,
        },
        width: {
          xs: "100%",
          sm: "90%",
          md: "85%",
          xl: "60%",
        },
        gap: {
          sm: "1.7rem",
          md: "1rem",
        },
      }}
    >
      <Box
        width={"100%"}
        paddingX={isDesktop ? "0" : 2}
        bgcolor="inherit"
        sx={{
          display: "flex",
          gap: {
            xs: "1.5rem",
            sm: "1.7rem",
            md: "1rem",
          },
          mb: {
            sm: 1,
            md: 2,
          },
        }}
      >
        <OutlinedInput
          value={values}
          sx={{
            height: {
              xs: "32px",
              sm: "35px",
              md: "35px",
            },
            width: {
              xs: "100%",
              sm: "100%",
            },
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setValues(e.target.value);
          }}
          placeholder="Search..."
        />
        <Button
          variant="contained"
          disableElevation
          disableRipple
          sx={{
            color: "white",
            fontSize: {
              sm: 12,
              lg: 14,
            },
            fontWeight: "bold",
            bgcolor: light ? "warning.main" : "warning.dark",
            width: {
              xs: 10,
              sm: 120,
              lg: "100px",
            },
            height: {
              xs: "32px",
              sm: "35px",
            },
            "&:hover": {
              bgcolor: "warning.dark",
            },
          }}
          onClick={searchHandler}
        >
          {isDesktop ? "Search" : <SearchOutlinedIcon fontSize="medium" />}
        </Button>
      </Box>
      <Box
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        <Box
          display={"flex"}
          justifyContent="center"
          gap={0}
          bgcolor={light ? "#e0e0e0" : "grey.400"}
          marginLeft={isDesktop ? 0 : 2}
          sx={{
            marginTop: isDesktop ? 0 : 2,
            marginBottom: isDesktop ? 0 : 1,
            width: {
              xs: "50%",
              sm: "auto",
            },
          }}
          borderRadius="0.2rem"
        >
          <Box
            sx={{
              width: "100%",
              height: {
                xs: "35px",
              },
              display: "flex",
              alignItems: "center",
              paddingRight: {
                sm:1,
              },
              
            }}
          >
            <Typography
              letterSpacing={"0.05rem"}
              color={"black"}
              variant="caption"
              width={"100%"}
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                pl:{
                  xs:1
                }
              }}
            >
              Hello,{user?.name}
            </Typography>
            {/* <Typography variant="caption" sx={{ fontWeight: "bold" }}>
           Your account
         </Typography> */}
          </Box>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <ExpandMoreIcon sx={{ color: "black" }} fontSize={isDesktop ? "inherit" :"small"}/>
          </Box>
        </Box>
        <Popover
          open={open}
          id="mouse-over-popover"
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: isDesktop ? "center" : "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}


        >
          <List sx={{ width: isDesktop ? "160px" : "160px" }} component={motion.li} variants={listContainer} initial="hidden" whileInView="visible">
            {IntroMenu.map((menu) => (
              <Link to={`${menu.path}`} key={`${menu.id}`}>
                <ListItem disablePadding>
                  <ListItemButton disableRipple>
                    <ListItemText
                      primary={
                        <Typography
                          component={motion.p} 
                          variants={list}
                          color={light ? "black" : "white"}
                          sx={{ fontSize: 12, textAlign: "center" }}
                        >
                          {menu.name}
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}

            {/* <Link to={"/myaccount/winlots"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        color="black"
                        sx={{ fontSize: 12, textAlign: "center" }}
                      >
                        Win Lots
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={"/myaccount/lostlots"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        color="black"
                        sx={{ fontSize: 12, textAlign: "center" }}
                      >
                        Lost Lots
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link>
            <Link to={"/myaccount/watchlists"}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={
                      <Typography
                        color="black"
                        sx={{ fontSize: 12, textAlign: "center" }}
                      >
                        Watch Lists
                      </Typography>
                    }
                  />
                </ListItemButton>
              </ListItem>
            </Link> */}
            <Divider sx={{ mb: 2 }} />
            {/* <Link to={"/signin"}>
              <Box
                sx={{
                  width: "75%",
                  padding: 1,
                  textAlign: "center",
                  borderRadius: 1,
                  fontWeight: "bold",
                  marginX: "auto",
                  fontSize: 14,
                  bgcolor: "warning.main",
                  color: "white",
                  "&:hover": {
                    bgcolor: "warning.light",
                  },
                }}
              >
                Sign In
              </Box>
            </Link> */}
            <Box width={"80%"} mx={"auto"}>
              <BidButton
                color={"white"}
                func={logoutHandler}
                ButtonText="Log Out"
                padding={{
                  xs: 0.5,
                }}
                fontS={{
                  xs: 14,
                }}
                bgC="warning.dark"
                hoverC="warning.main"
              />
            </Box>
          </List>
        </Popover>
      </Box>
    </Box>
  );
};

export default Searchbar;
