import { Box, Modal, TextField, Typography, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useMutation,useQueryClient } from "@tanstack/react-query";

import Input from "./Input";
import { profileDetails } from "../../../data/DummyData";
import BidButton from "../../BiddingComponent/Components/BidButton";
import {ProfileUserProps, User} from "../../Utils/apiTypes/apiTypes"

import { userInfoAPI } from "../../Utils/axios";



interface UpdateProps{
  handler:()=> void,
  user:ProfileUserProps
}

const UpdateModel: React.FC<UpdateProps> = ({handler,user}) => {
  console.log("user",user)

  const queryClient = useQueryClient();

  const [username, setUsername] = useState("");
  const [bgUrl, setbgUrl] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");


  //update fix bgUrl and profile Url
  useEffect(() => {
    setbgUrl(user?.backgroundUrl);
    setProfile(user?.profileUrl)
    setUsername(user?.name);
    setEmail(user?.email);
    setStreet(user?.location[0]?.street); 
    setTown(user?.location[0]?.town);
    setRegion(user?.location[0]?.region);
    setCountry(user?.location[0]?.country);
  }, []);


  const {isLoading,mutate : updateApi,data:updatedUser} = useMutation(userInfoAPI.updateProfiel,{
    onSuccess:(data)=>{
      console.log("updat",data.data)
      queryClient.invalidateQueries({queryKey:["user"]})
      handler()
    },
    onError:(error)=>{
      console.log("err",error)
    }
  })


  const updateProfileHandler = ()=>{
    const profileData = {
        name:username,
        email,
        profileUrl:profile,
        backgroundUrl:bgUrl,
        street,
        town,
        region,
        country
    };

    updateApi(profileData)

  }

  console.log("update",updatedUser)

  return (
    <>
      <Input
        text={`${bgUrl}`}
        name="backImageGroundUrl"
        id="keep-mounted-modal-bgimage"
        handlerFun={(e) => setbgUrl(e.target.value)}
      />
      <Input
        text={`${profile}`}
        name="profileImageUrl"
        id="keep-mounted-modal-profileUrl"
        handlerFun={(e) => setProfile(e.target.value)}
      />
      <Input
        text={`${username}`}
        name="username"
        id="keep-mounted-modal-username"
        handlerFun={(e) => setUsername(e.target.value)}
      />
      <Input
        text={`${email}`}
        name="email"
        id="keep-mounted-modal-email"
        handlerFun={(e) => setEmail(e.target.value)}
      />
      <Input
        text={`${street}`}
        name="street"
        id="keep-mounted-modal-street"
        handlerFun={(e) => setStreet(e.target.value)}
      />
      <Input
        text={`${town}`}
        name="town"
        id="keep-mounted-modal-town"
        handlerFun={(e) => setTown(e.target.value)}
      />
      <Input
        text={`${region}`}
        name="region"
        id="keep-mounted-modal-region"
        handlerFun={(e) => setRegion(e.target.value)}
      />
      <Input
        text={`${country}`}
        name="country"
        id="keep-mounted-modal-country"
        handlerFun={(e) => setCountry(e.target.value)}
      />
      <Box
        display={"flex"}
        gap={2}
        sx={{
          width:{
            xs:"70%",
            sm:"60%"
          },
          gap:{
            xs:0.8,
            sm:2
          }
        }}
        ml={"auto"}
        mt={4}
        id="keep-mounted-modal-btn"
      >
        <BidButton
          disabled={isLoading}
          ButtonText="Cancel"
          bgC="black"
          hoverC="grey.800"
          func={handler}
          fontS={{
            sm: 14,
          }}
          padding={{
            sm: 1,
          }}
        />
        <BidButton
          disabled={isLoading}
          ButtonText="Save"
          bgC="black"
          hoverC="grey.800"
          func={updateProfileHandler}
          fontS={{
            sm: 14,
          }}
          padding={{
            sm: 1,
          }}
        />
      </Box>
    </>
  );
};

export default UpdateModel;
