import { Box, Modal, TextField, Typography, InputBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import { profileDetails } from "../../../data/DummyData";
import BidButton from "../../BiddingComponent/Components/BidButton";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
  "&:focus-visible": {
    outline: "none",
  },
};

interface func{
  handler:()=> void
}

const UpdateModel: React.FC<func> = ({handler}) => {
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
    setUsername(profileDetails.username);
    setEmail(profileDetails.email);
    setStreet(profileDetails.street);
    setTown(profileDetails.town);
    setRegion(profileDetails.region);
    setCountry(profileDetails.country);
  }, [username, email, street, town, region, country]);

  return (
    <>
      <Input
        text={`${username}`}
        name="backImageGroundUrl"
        id="keep-mounted-modal-bgimage"
        handlerFun={(e) => setbgUrl(e.target.value)}
      />
      <Input
        text={`${username}`}
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
        width={"60%"}
        ml={"auto"}
        mt={4}
        id="keep-mounted-modal-btn"
      >
        <BidButton
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
          ButtonText="Save"
          bgC="black"
          hoverC="grey.800"
          func={() => {}}
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
