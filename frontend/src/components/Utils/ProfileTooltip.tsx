import React, { useState } from "react";
import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";

import { Logout } from "@mui/icons-material";
import MoodIcon from '@mui/icons-material/Mood';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import BidButton from "../BiddingComponent/Components/BidButton";

const ProfileTooltip = () => {
  const [anchorEl, setAnchorEl] = useState<null|HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Account Setting">
        <IconButton
        disableRipple
          onClick={handleClick}
          size="medium"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 55,
              height: 55,
            }}
            src="https://images.unsplash.com/photo-1517242027094-631f8c218a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGVnbyUyMGZvciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="profile Logo"
          />
        </IconButton>
      </Tooltip>
      <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 45,
                height: 45,
                ml: -0.5,
                mr: 3,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
              width:200,
              height:240,
              textAlign:"center"
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
        <Avatar
            sx={{
              width: 50,
              height: 50,
            }}
            src="https://images.unsplash.com/photo-1517242027094-631f8c218a0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGVnbyUyMGZvciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="profile Logo"
          />
          <Typography variant="h6">Profile</Typography>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose} sx={{display:"flex",justifyItems:"center",alignItems:"center",gap:2.6}}>
            <MoodIcon/>
        <Typography variant="h6">Win Lots</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{display:"flex",justifyItems:"center",alignItems:"center",gap:2.6}}>
            <MoodBadIcon/>
        <Typography variant="h6">Lost Lots</Typography>
        </MenuItem>
        <Divider/>
        <MenuItem sx={{"&:hover":{
            bgcolor:"transparent"
        }}}>
            <BidButton ButtonText="Log Out" padding={{
                xs:1
            }} fontS={{
                xs:14
            }} 
            bgC="warning.dark" hoverC="warning.main" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileTooltip;
