import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import { profileDetails } from "../../../data/DummyData";
import BidButton from "../../BiddingComponent/Components/BidButton";
import ProfileInfo from "../components/ProfileInfo";
import UpdateModel from "../components/UpdateModel";

const UserPage = () => {

  const [openModel, setOpenModel] = useState(false);
  const [username, setUsername] = useState("")

  const modelHandler = ()=> setOpenModel(!open);


  const valueHandler = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
    setUsername(e.target.value)
  }

  console.log(openModel)

  return (
    <>
      <Box bgcolor={"#FFFFFF"} width="100%" boxSizing={"border-box"} position={"relative"}>
        {/*profile image */}
        <Box p={2}>
          <Typography fontWeight={"bold"} variant="h6">
            Personal
          </Typography>
          <Typography variant="caption" color={"#C9C9C9"}>
            General employee's information
          </Typography>

          {/*background Image */}
          <Box
            width={"100%"}
            height={140}
            overflow="hidden"
            sx={{
              backgroundImage: `url(https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)`,
              backgroundPosition: "50% 50%",
              backgroundSize: "cover",
              boxSizing: "border-box",
              mt: 2,
            }}
          ></Box>
          <Avatar
            sx={{
              width: 120,
              height: 120,
              mx: "auto",
              mt: "-56px",
            }}
            alt="profile photo"
            src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdG9yJTIwY2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Box>

        {/*General setting */}
        <Divider sx={{ color: "#C9C9C9", m: 2 }}>Personal Details</Divider>

        <Box width="70%" mx="auto">
          <ProfileInfo label="UserName" data={profileDetails.username} />
          <ProfileInfo label="Email" data={profileDetails.email} />
          <ProfileInfo label="Role" data={profileDetails.role} />
          <ProfileInfo label="Street" data={profileDetails.street} />
          <ProfileInfo label="Town" data={profileDetails.town} />
          <ProfileInfo label="Region" data={profileDetails.region} />
          <ProfileInfo label="Country" data={profileDetails.country}/>
        </Box>

        <Box width={"40%"} display="flex" ml={"auto"} gap={2} my={4}>
          <BidButton
            padding={{
              sm: 1,
            }}
            bgC="#E6E6E6"
            fontS={{
              sm: 16,
            }}
            hoverC="#E1E0E0"
            ButtonText="Cancel"
            func={()=>{}}
          />

          <BidButton
            padding={{
              sm: 1,
            }}
            bgC="warning.main"
            fontS={{
              sm: 16,
            }}
            hoverC="warning.dark"
            ButtonText="Update"
            func={modelHandler}
          />
        </Box>
        <UpdateModel openn={openModel} closeHandler={modelHandler}/>
      </Box>
      
    </>
  );
};

export default UserPage;
