import React, { useContext } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DetailSearchbar from "./DetailSearbar";
import { PrimaryCategories,mobileLists } from "../../data/DummyData";
import { ThemeContext } from "../Utils/ThemeContext/ThemeContext";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from '@mui/icons-material/LightMode';

interface DropdownProps {
  options: string[];
}



const DetailNavbar = () => {
  const navigate = useNavigate()
  const { themeMode, handleThemeToggle } = useContext(ThemeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const isNonMobileScreen = useMediaQuery(theme.breakpoints.up("md"));
  const lowSm = useMediaQuery(theme.breakpoints.down("sm"));
  const is4k = useMediaQuery(theme.breakpoints.up("xl"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const light = themeMode === "light"

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
      sx={{ bgcolor:light ? "inherit" : "#1B2938", color: light ? "black" : "white", px: is4k ? "2%" : "" }}
      position="static"
      elevation={1}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: lowSm ? 3 : "",
        }}
      >
        <Box>
          <Link to={"/"}>
            <Box
              sx={{
                width: {
                  xs: "100px",
                  sm: "110px",
                  md: "100px",
                  lg: "90px",
                },
                height: {
                  xs: "100px",
                  sm: "110px",
                  md: "100px",
                  lg: "90px",
                },
                pr:{
                  xs:3,
                  sm:2
                },
                pt:{
                  xs:2
                }
              }}
              overflow="hidden"
              component="div"
            >
              <img
                src={light ? "/whiteLogo.svg" : "/Logo.svg"}
                alt="logo"
              />
            </Box>
          </Link>
        </Box>
        {!lowSm && <DetailSearchbar light={light} />}
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
            <Link to={"/"}>
              <Typography color={light ? "black" : "white"}>Auctions</Typography>
            </Link>
            <Box
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
            >
              <Button
                sx={{ textTransform: "none", color :light ? "black" : "white"}}
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
                   <Box  key={`${option.id}`}>
                     <Link to={`${option.path}`}>
                      <ListItem disablePadding sx={{
                          "&:hover":{
                            bgcolor:"warning.main",
                          }
                        }}>
                        <ListItemButton disableRipple>
                          <ListItemText
                            sx={{ color: light ? "black" : "white" ,"&:hover":{color:"white"}}}
                            primary={option.name}
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
              {themeMode === "light" ? <DarkModeOutlinedIcon/> : <LightModeIcon sx={{color:"white"}}/>}
            </IconButton>
          </Box>
        )}

        {/*Mobile Navigation */}

        {!isNonMobileScreen && (
          <IconButton onClick={closeDrawer} sx={{ mb: 1.2 }}>
            <MenuIcon fontSize={"large"} />
          </IconButton>
        )}
      </Toolbar>
      {lowSm && <DetailSearchbar light={light} />}
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
              <Box key={list.id}>
              <ListItem
                
                sx={{
                  "&:hover": {
                    bgcolor: "#e0e0e0",
                  },
                }}
              >
                <Button disableElevation disableRipple onClick={()=> navigate(`${list.path}`)} sx={{textTransform:"none"}}>
                  <ListItemText
                    primary={
                      <Typography fontSize={lowSm ? 12 : 14} color={light ? "black" : "white"} sx={{textTransform:"none"}}>
                        {list.name}
                      </Typography>
                    }
                  />
                </Button>
              </ListItem>
              <Divider />
              
              </Box>
          ))}
          <ListItemButton sx={{display:'flex',gap:0.6,alignItems:"center"}} onClick={handleThemeToggle}>
            {themeMode === "light" ? (
              <DarkModeIcon fontSize="small" />
            ) : (
              <DarkModeOutlinedIcon />
            )}{`${themeMode}`} Mode
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default DetailNavbar;
