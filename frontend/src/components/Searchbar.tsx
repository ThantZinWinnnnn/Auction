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

const Searchbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [values, setValues] = useState<string | null>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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
      bgcolor="inherit"
      sx={{
        mx: "auto",
        display: "flex",
        gap: {
          sm: "1.7rem",
          md: "1rem",
        },
        width: {
          sm: "90%",
          lg: "70%",
        },
        mb:{
          sm:1,
          md:2
        }
      }}
    >
      <OutlinedInput
        fullWidth={true}
        value={values}
        sx={{
          height: {
            sm: "35px",
            md: "40px",
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
            sm: 120,
            lg: "100px",
          },
          height: {
            sm: "35px",
            md: "40px",
          },
          "&:hover": {
            bgcolor: "warning.light",
          },
        }}
        onClick={searchHandler}
      >
        Search
      </Button>
      <Box
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      >
        <Box display={"flex"} justifyContent="center" gap={0} bgcolor="#e0e0e0">
          <Box
            sx={{
              width:{
                sm:95,
                md:"100px"
              },
              height: {
                sm: "35px",
                md: "40px",
              },
              display: "flex",
              alignItems:"center",
              paddingX:1
            }}
          >
            <Typography variant="caption">Hello,sign in</Typography>
            {/* <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              Your account
            </Typography> */}
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <ExpandMoreIcon/>
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
                      <Typography sx={{ fontSize: 12, textAlign: "center" }}>
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
                      <Typography sx={{ fontSize: 12, textAlign: "center" }}>
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
                      <Typography sx={{ fontSize: 12, textAlign: "center" }}>
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
