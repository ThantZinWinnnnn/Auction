import React from "react";
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
} from "@mui/material";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProfileTooltip from "./Tooltip/ProfileTooltip";
import { PrimaryCategories, mobileLists } from "../data/DummyData";

const Navbar = () => {
  const theme = useTheme();
  const [product, setProduct] = useState('');
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
  return (
    <AppBar
      sx={{ bgcolor: "inherit", color: "black", px: is4k ? "1%" : "" }}
      position="static"
      elevation={2}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to={"/"}>
            <Box
              sx={{
                width: {
                  xs: "130px",
                  sm: "110px",
                  md: "100px",
                  lg: "90px",
                },
                height: {
                  xs: "130px",
                  sm: "110px",
                  md: "100px",
                  lg: "90px",
                },
              }}
              overflow="hidden"
              component="div"
            >
              <img
                width={"100%"}
                src="https://res.cloudinary.com/dhprtrwtd/image/upload/v1648056557/WG_2022_reskin.svg"
                alt="logo"
              />
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
              <Typography color={"black"}>Auctions</Typography>
            </Link>
            <Box
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
            >
              <Button
                sx={{ textTransform: "none", color: "black" }}
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
                <List sx={{ width: "200px" }}>
                  {PrimaryCategories.map((option) => (
                    <Box key={`${option.id}`}>
                      <Link to={`${option.path}`}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              primary={option.name}
                              sx={{
                                color: "black",
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
            <Link to={"/features"}>
              <Typography color={"black"}>Dark Mode</Typography>
            </Link>
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
          <IconButton onClick={closeDrawer}>
            <MenuIcon fontSize={lowSm ? "medium" : "large"} />
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
                <Link to={list.name}>
                  <ListItemText
                    primary={
                      <Typography fontSize={lowSm ? 10 : 14} color="black">
                        {list.name}
                      </Typography>
                    }
                  />
                </Link>
              </ListItem>
              <Divider />
            </Box>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;
