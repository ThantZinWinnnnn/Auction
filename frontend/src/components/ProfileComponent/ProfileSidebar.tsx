import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface list {
  id: string;
  text: string;
  path: string;
}
const SidebarLists: Array<list> = [
  {
    id: "1",
    text: "Profile Setting",
    path: "/user/profile",
  },
  {
    id: "2",
    text: "Create a Product",
    path: "/user/create",
  },
  {
    id: "3",
    text: "Sell Products Lists",
    path: "/user/userProducts",
  },
  {
    id: "4",
    text: "Win Lot Products",
    path: "/user/winProducts",
  },
  {
    id: "5",
    text: "Lost Lot Products",
    path: "/user/lostProducts",
  },
];

const ProfileSidebar = () => {
  const location = useLocation();

  const [selectedIndex, setSelectedIndex] = React.useState(SidebarLists.findIndex(
    (list) => location.pathname === list.path
  ));
  const theme = useTheme();
  const belowLg = useMediaQuery(theme.breakpoints.down('lg'))



  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };
  
  return (
    <Box
      boxShadow={2}
      borderRadius={1}
      bgcolor={"#FFFFFF"}
      sx={{
        width: {
          lg:"18%",
          md:"26%",
          sm:"30%"
        },
        height: {
          lg:"340px",
          sm:"340px"
        },
      }}
    >
      <Box
        sx={{
          p: 2,
        }}
      >
        <Typography variant={belowLg? "subtitle1" : "h6"} fontWeight={"bold"}>
          Settings
        </Typography>
        <Typography variant="caption" fontWeight={"medium"} color="#C9C9C9">
          Customer view and extra actions
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <List
          sx={{
            p: 0,
          }}
        >
          {SidebarLists.map((list,index) => (
           <Link to={list.path} key={`${list.id}`}>
            <ListItem key={`${list.id}`}
              disablePadding
              
              sx={{
                borderLeft:"4px solid transparent",
                "&:hover": {
                  borderLeft: "4px solid red",
                  backgroundColor:"grey.100"
                },
               
                
              }}>
                <ListItemButton
                  key={`${list.id}`}
                  disableRipple
                  sx={{ color: "black" ,
                  '&.Mui-selected': {
                    borderLeft: "4px solid red",
                    backgroundColor:"grey.100" // change this to the color you want
                  },
                  
                }}
                  selected={selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                  
                >
                  
                  <ListItemText key={`${list.id}`} color="black"  sx={{
                    textDecoration:"none",
                    fontSize:"10px"
                    
                  }}
                  primary={<Typography key={`${list.id}`} sx={{
                    fontSize:{
                      sm:12,
                      md:14,
                      lg:16
                    }
                  }}>{list.text}</Typography>}
                  />
                  
                </ListItemButton>
              </ListItem>
           </Link>
          ))}
        </List>
      </Box>
    </Box>
  );
};



export default ProfileSidebar;
