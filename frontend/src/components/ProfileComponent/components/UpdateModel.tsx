import { Box, Modal, TextField, Typography, InputBase } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import Input from "./Input";
import { profileDetails } from "../../../data/DummyData";
import BidButton from "../../BiddingComponent/Components/BidButton";
import { ProfileUserProps, User } from "../../Utils/apiTypes/apiTypes";

import { userInfoAPI } from "../../Utils/endpoins/axios";

interface UpdateProps {
  handler: () => void;
  user: ProfileUserProps;
  light:boolean
}

const UpdateModel: React.FC<UpdateProps> = ({ handler, user,light }) => {
  console.log("user", user);

  const queryClient = useQueryClient();

  const [username, setUsername] = useState("");
  const [bgUrl, setbgUrl] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [town, setTown] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  const {
    isLoading,
    mutate: updateApi,
    data: updatedUser,
  } = useMutation(userInfoAPI.updateProfiel, {
    onSuccess: (data) => {
      console.log("updat", data.data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      handler();
    },
    onError: (error) => {
      console.log("err", error);
    },
  });

  const updateProfileHandler = () => {


    const profileData = {
      name: username,
      email,
      profileUrl: profile,
      backgroundUrl: bgUrl,
      street,
      town,
      region,
      country,
    };

    updateApi(profileData);
  };

  console.log("update", updatedUser);
  console.log("user", user);

  return (
    <>
      <Input
        text={`${user?.backgroundUrl}`}
        name="backImageGroundUrl"
        id="keep-mounted-modal-bgimage"
        handlerFun={(e) => setbgUrl(e.target.value)}
      />
      <Input
        text={`${user?.profileUrl}`}
        name="profileImageUrl"
        id="keep-mounted-modal-profileUrl"
        handlerFun={(e) => setProfile(e.target.value)}
      />
      <Input
        text={`${user?.name}`}
        name="username"
        id="keep-mounted-modal-username"
        handlerFun={(e) => setUsername(e.target.value)}
      />
      <Input
        text={`${user?.email}`}
        name="email"
        id="keep-mounted-modal-email"
        handlerFun={(e) => setEmail(e.target.value)}
      />
      <Input
        text={`${user?.location[0]?.street}`}
        name="street"
        id="keep-mounted-modal-street"
        handlerFun={(e) => setStreet(e.target.value)}
      />
      <Input
        text={`${user?.location[0]?.town}`}
        name="town"
        id="keep-mounted-modal-town"
        handlerFun={(e) => setTown(e.target.value)}
      />
      <Input
        text={`${user?.location[0]?.region}`}
        name="region"
        id="keep-mounted-modal-region"
        handlerFun={(e) => setRegion(e.target.value)}
      />
      <Input
        text={`${user?.location[0]?.country}`}
        name="country"
        id="keep-mounted-modal-country"
        handlerFun={(e) => setCountry(e.target.value)}
      />
      <Box
        display={"flex"}
        gap={2}
        sx={{
          width: {
            xs: "70%",
            sm: "60%",
          },
          gap: {
            xs: 0.8,
            sm: 2,
          },
        }}
        ml={"auto"}
        mt={4}
        id="keep-mounted-modal-btn"
      >
        <BidButton
          disabled={isLoading}
          ButtonText="Cancel"
          bgC={light ? "black" : "grey.700"}
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
          bgC={light ? "black" : "grey.700"}
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
