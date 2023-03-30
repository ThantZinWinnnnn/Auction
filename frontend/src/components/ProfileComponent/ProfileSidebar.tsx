import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

interface list {
  id: string;
  text: string;
}
const SidebarLists: Array<list> = [
  {
    id: "1",
    text: "Profile Setting",
  },
  {
    id: "2",
    text: "Sell Products Lists",
  },
  {
    id: "3",
    text: "Win Lot Products",
  },
  {
    id: "4",
    text: "Lost Lot Products",
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
                    borderLeft:"2px solid red"
                }
            }}>
              <ListItemButton key={list.id} disableRipple>
              <ListItemText key={list.id}>{list.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ProfileSidebar;
