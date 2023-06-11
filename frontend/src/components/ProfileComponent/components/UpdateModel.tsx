import { Box, Modal, TextField, Typography, InputBase } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import Input from "./Input";
import BidButton from "../../BiddingComponent/Components/BidButton";
import { ProfileUserProps, User } from "../../Utils/apiTypes/apiTypes";

import { userInfoAPI } from "../../Utils/endpoins/axios";
import toast, { Toaster } from "react-hot-toast";
import ButtonLoading from "../../Utils/LoadingIndicator/ButtonLoading";
import UpdatingButton from "../../Utils/LoadingIndicator/UpdatingButton";

const notifyForInputError = () =>
  toast.error("OOPS! Please fill all the fields", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });

interface UpdateProps {
  handler: () => void;
  user: ProfileUserProps;
  light: boolean;
}

const UpdateModel: React.FC<UpdateProps> = ({ handler, user, light }) => {
  console.log("usergyi", user?.location?.[0]?.id);
  const LocationInfo = user?.location?.[0]?.id;

  const queryClient = useQueryClient();

  // const [firstUpate,setFirstUpdate] = useState(true);
  const [username, setUsername] = useState(`${user?.name}`);
  const [bgUrl, setbgUrl] = useState(
    `${user?.backgroundUrl}` === "undefined"
      ? "Enter your background Image Url"
      : `${user?.backgroundUrl}`
  );
  const [profile, setProfile] = useState(
    `${user?.profileUrl}` === "undefined" ? "" : `${user?.profileUrl}`
  );
  const [email, setEmail] = useState(`${user?.email}`);
  const [street, setStreet] = useState(
    `${user?.location[0]?.street}` === "undefined"
      ? ""
      : `${user?.location[0]?.street}`
  );
  const [town, setTown] = useState(
    `${user?.location[0]?.town}` === "undefined"
      ? ""
      : `${user?.location[0]?.town}`
  );
  const [region, setRegion] = useState(
    `${user?.location[0]?.region}` === "undefined"
      ? ""
      : `${user?.location[0]?.region}`
  );
  const [country, setCountry] = useState(
    `${user?.location[0]?.country}` === "undefined"
      ? ""
      : `${user?.location[0]?.country}`
  );

  const {
    isLoading,
    mutate: updateApi,
    data: updatedUser,
  } = useMutation(
    LocationInfo === undefined
      ? userInfoAPI.updateProfile
      : userInfoAPI.reUpdateProfile,
    {
      onSuccess: (data) => {
        console.log("updat", data.data);
        queryClient.invalidateQueries({ queryKey: ["user"] });
        handler();
      },
      onError: (error) => {
        console.log("err", error);
      },
    }
  );

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

    const reUpdateData = {
      name: username,
      email,
      profileUrl: profile,
      backgroundUrl: bgUrl,
      street,
      town,
      region,
      country,
      locationId:LocationInfo
    }

    if (
      username === "" ||
      email === "" ||
      profile === "" ||
      bgUrl === "" ||
      street === "" ||
      town === "" ||
      region === "" ||
      country === ""
    ) {
      notifyForInputError();
    } else {
      updateApi(LocationInfo === undefined ? profileData : reUpdateData)
    }

    console.log("profileData", profileData);
  };

  console.log("update", updatedUser);

  return (
    <>
      <Input
        text={bgUrl}
        name="backImageGroundUrl"
        id="keep-mounted-modal-bgimage"
        handlerFun={(e) => setbgUrl(e.target.value)}
      />
      <Input
        text={profile}
        name="profileImageUrl"
        id="keep-mounted-modal-profileUrl"
        handlerFun={(e) => setProfile(e.target.value)}
      />
      <Input
        text={username}
        name="username"
        id="keep-mounted-modal-username"
        handlerFun={(e) => setUsername(e.target.value)}
      />
      <Input
        text={email}
        name="email"
        id="keep-mounted-modal-email"
        handlerFun={(e) => setEmail(e.target.value)}
      />
      <Input
        text={street}
        name="street"
        id="keep-mounted-modal-street"
        handlerFun={(e) => setStreet(e.target.value)}
      />
      <Input
        text={town}
        name="town"
        id="keep-mounted-modal-town"
        handlerFun={(e) => setTown(e.target.value)}
      />
      <Input
        text={region}
        name="region"
        id="keep-mounted-modal-region"
        handlerFun={(e) => setRegion(e.target.value)}
      />
      <Input
        text={country}
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
          color="white"
          disabled={isLoading}
          ButtonText="Cancel"
          bgC={light ? "black" : "grey.600"}
          hoverC="grey.700"
          func={handler}
          fontS={{
            sm: 14,
          }}
          padding={{
            sm: 1,
          }}
        />
        
        {
          isLoading ? <UpdatingButton text="Updating" />: 
          <BidButton
          color="white"
          disabled={isLoading}
          ButtonText="Save"
          bgC={light ? "black" : "grey.600"}
          hoverC="grey.700"
          func={updateProfileHandler}
          fontS={{
            sm: 14,
          }}
          padding={{
            sm: 1,
          }}
        />
        }
      
      </Box>
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};

export default UpdateModel;
