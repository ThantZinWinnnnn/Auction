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
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DetailSearchbar from "./DetailSearbar";

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

const mobileLists: Array<lists> = [
  { name: "Auctions" },
  { name: "Liquidations" },
  { name: "High Street Goods" },
  { name: "Children & Baby" },
  { name: "Electronics" },
  { name: "Art" },
  { name: "Jewellery" },
  { name: "Watches" },
  { name: "Fashion" },
  { name: "About Us" },
  { name: "Sign Up" },
  { name: "Account" },
];

const DetailNavbar = () => {
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
  return (
    <AppBar
      sx={{ bgcolor: "inherit", color: "black", px: is4k ? "1%" : "" }}
      position="static"
      elevation={2}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Link to={"/"}>
            <Box
              sx={{
                width: {
                  xs: "130px",
                  sm: "146px",
                  md: "100px",
                  lg: "120px",
                  xl: "150px",
                },
                height: {
                  xs: "130px",
                  sm: "146px",
                  md: "100px",
                  lg: "120px",
                  xl: "150px",
                },
              }}
              overflow="hidden"
              component="div"
            >
              <img
                src="https://res.cloudinary.com/dhprtrwtd/image/upload/v1648056557/WG_2022_reskin.svg"
                alt="logo"
              />
            </Box>
          </Link>
        </Box>
        <DetailSearchbar />
        {/*Deskto Nav */}
        {isNonMobileScreen && (
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            gap={{
              md: 1,
              lg: 6,
              xl: 8,
            }}
            paddingRight={{ md: 3, lg: 4, xl: 6 }}
          >
            <Link to={"/features"}>
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
                  {lists.map((option) => (
                    <Link to={option.name} key={option.name}>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText sx={{color:"black"}} primary={option.name} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Popover>
            </Box>
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
          </Box>
        )}

        {/*Mobile Navigation */}

        {!isNonMobileScreen && (
          <IconButton onClick={closeDrawer}>
            <MenuIcon fontSize={lowSm ? "medium" : "large"} />
          </IconButton>
        )}
      </Toolbar>
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
            <>
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
            </>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default DetailNavbar;
