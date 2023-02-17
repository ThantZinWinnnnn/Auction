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
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";

interface DropdownProps {
  options: string[];
}

interface lists {
  name: string;
}

const lists: Array<lists> = [
  { name: "books" },
  { name: "Electronics" },
  { name: "Laptops" },
];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <AppBar sx={{ bgcolor: "inherit", color: "black" }} position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to={"/"}>
            <Box
              sx={{
                width: {
                  md: "100px",
                  lg: "120px",
                  xl: "150px",
                },
                height: {
                  md: "100px",
                  lg: "120px",
                  xl: "150px",
                },
              }}
              component="div"
            >
              <img
                src="https://res.cloudinary.com/dhprtrwtd/image/upload/v1648056557/WG_2022_reskin.svg"
                alt="logo"
              />
            </Box>
          </Link>
        </Box>
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
          <Link to={"/features"}>
            <Typography>Auctions</Typography>
          </Link>
          <Box
            aria-owns={open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <Typography>Auctions Categories</Typography>
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
                {lists.map((option) => (
                  <Link to={option.name} key={option.name}>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={option.name} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                ))}
              </List>
            </Popover>
          </Box>
          <Link to={"/features"}>
            <Typography>About Us</Typography>
          </Link>
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
              <Typography>Sing Up</Typography>
            </Link>

            <Link to={"/login"}>
              <Typography>Log In</Typography>
            </Link>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
