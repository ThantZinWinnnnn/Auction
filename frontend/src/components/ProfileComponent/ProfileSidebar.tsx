import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

interface list {
  id: string;
  text: string;
  path:string
}
const SidebarLists: Array<list> = [
  {
    id: "1",
    text: "Profile Setting",
    path:"/profile"
  },
  {
    id: "2",
    text: "Sell Products Lists",
    path:"/userProducts"
  },
  {
    id: "3",
    text: "Win Lot Products",
    path:"/winProducts"
  },
  {
    id: "4",
    text: "Lost Lot Products",
    path:"/lostProducts"
  },
];

const ProfileSidebar = () => {
  return (
    <Box
      boxShadow={2}
      borderRadius={1}
      bgcolor={"#FFFFFF"}
      sx={{
        width: "240px",
        height:"300px"
      }}
    >
      <Box sx={{
        p:2
      }}>
      <Typography variant="h6" fontWeight={"bold"}>
        Settings
      </Typography>
      <Typography variant="caption" fontWeight={"medium"} color="#C9C9C9">
        Customer view and extra actions
      </Typography>
      </Box>
      <Box sx={{width:"100%"}}>
        <List sx={{
            p:0
        }}>
          {SidebarLists.map((list) => (
            <ListItem key={list.id} disablePadding sx={{
                "&:hover":{
                    borderLeft:"4px solid red"
                }
            }}>
              <Link to={list.path}>
              <ListItemButton key={list.id} disableRipple  sx={{ color: "black" }}>
              <ListItemText key={list.id}>{list.text}</ListItemText>
              </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ProfileSidebar;
