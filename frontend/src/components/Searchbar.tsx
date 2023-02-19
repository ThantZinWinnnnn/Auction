import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Searchbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [values, setValues] = useState<string | null>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const searchHandler = () => {
    //api call
    console.log("values", values);
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
          xs:0,
          sm:2
        },
        width: {
          xs:'100%',
          sm: "90%",
          md: "85%",
        },
        gap: {
          sm: "1.7rem",
          md: "1rem",
        },
      }}
    >
      <Box
        width={"100%"}
        paddingX={isDesktop ? "0" : 3}
        bgcolor="inherit"
        sx={{
          display: "flex",
          gap: {
            xs:"1.5rem",
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
              md: "40px",
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
              sm: 14,
            },
            fontWeight: "bold",
            bgcolor: "warning.main",
            width: {
              xs: 10,
              sm: 120,
              lg: "100px",
            },
            height: {
              xs: "32px",
              sm: "35px",
              md: "40px",
            },
            "&:hover": {
              bgcolor: "warning.light",
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
          bgcolor="#e0e0e0"
          marginLeft={isDesktop ? 0 : 3}
          sx={{ marginY: isDesktop ? 0 : 2 ,
          width:{
            xs:130
          },
          }}
          borderRadius="0.2rem"
        >
          <Box
            sx={{
              width: {
                sm: 95,
                md: "100px",
              },
              height: {
                xs: "35px",
                md: "40px",
              },
              display: "flex",
              alignItems: "center",
              paddingX: 1
            }}
          >
            <Typography letterSpacing={'0.05rem'} variant="caption">Hello,sign in</Typography>
            {/* <Typography variant="caption" sx={{ fontWeight: "bold" }}>
           Your account
         </Typography> */}
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <ExpandMoreIcon />
          </Box>
        </Box>
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
          <List sx={{ width: "120px" }}>
            <Link to={"/myaccount/winlots"}>
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
            </Link>
            <Divider sx={{ mb: 2 }} />
            <Link to={"/signin"}>
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
            </Link>
          </List>
        </Popover>
      </Box>
    </Box>
  );
};

export default Searchbar;
