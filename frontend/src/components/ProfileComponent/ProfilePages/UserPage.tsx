import {
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { profileDetails } from "../../../data/DummyData";
import BidButton from "../../BiddingComponent/Components/BidButton";
import ProfileInfo from "../components/ProfileInfo";
import UpdateModel from "../components/UpdateModel";
import { userInfoAPI } from "../../Utils/endpoins/axios";

import { ProfileUserProps } from "../../Utils/apiTypes/apiTypes";
import ProductLoading from "../../Utils/LoadingIndicator/ProductLoading";
import { useParams } from "react-router-dom";
import { Title } from "../../Utils/helmet/Title";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300,
    sm: 450,
    lg: 500,
  },
  height: {
    xs: 600,
    xl: 700,
  },
  borderRadius: 1,
  boxShadow: 24,
  p: {
    xs: 2,
    lg: 4,
  },
  overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: "1px",
      },
};

type func = () => void;

interface themeProps {
  light: boolean;
}

const UserPage: React.FC<themeProps> = ({ light }) => {
  const { userInfo } = useParams();

  const [openModel, setOpenModel] = useState(false);
  const modelHandler: func = () => setOpenModel(!openModel);
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const token = localStorage.getItem("token");
  // console.log("tok",{token: token})

  const content = `${userInfo}`;
  const title = content[0]?.toUpperCase() + content.slice(1);
  // console.log("",title)

  const {
    isLoading: userFetchLoading,
    data,
    isError,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: userInfoAPI.getLoggedInUser,
    refetchOnWindowFocus: false,
  });

  if (userFetchLoading) {
    return <ProductLoading />;
  }

  const user: ProfileUserProps = data?.data;

  return (
    <>
      <Title title={`${title} Page`} />
      <Box
        bgcolor={light ? "#ffff" : "#1B2938"}
        sx={{ color: light ? "black" : "white" }}
        width={Mobile ? "100%" : "82%"}
        boxSizing={"border-box"}
        position={"relative"}
      >
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
            height={180}
            overflow="hidden"
            borderRadius={1}
            sx={{
              backgroundImage: `url(${user?.backgroundUrl})`,
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
            src={`${user?.profileUrl}`}
          />
        </Box>

        {/*General setting */}
        <Divider sx={{ color: "#C9C9C9", m: 2 }}>Personal Details</Divider>

        <Box width="96%" mx="auto" display={"flex"} flexWrap={"wrap"}>
          <ProfileInfo label="UserName" data={user?.name} />
          <ProfileInfo label="Email" data={user?.email} />
          <ProfileInfo label="Street" data={user?.location[0]?.street} />
          <ProfileInfo label="Town" data={user?.location[0]?.town} />
          <ProfileInfo label="Region" data={user?.location[0]?.region} />
          <ProfileInfo label="Country" data={user?.location[0]?.country} />
        </Box>

        <Box
          display="flex"
          ml={"auto"}
          gap={2}
          my={4}
          mr={2}
          sx={{
            width: {
              lg: "24%",
              md: "36%",
              sm: "46%",
              xs: "50%",
            },
          }}
        >
          <BidButton
            color="white"
            disabled={false}
            padding={{
              sm: 0.4,
              md: 0.4,
              lg: 1,
            }}
            bgC={light ? "#E6E6E6" : "grey.700"}
            fontS={{
              xs: 12,
              sm: 14,
              md: 16,
            }}
            hoverC={light ? "#E1E0E0" : "grey.800"}
            ButtonText="Cancel"
            func={() => {}}
          />

          <BidButton
            color="white"
            disabled={false}
            padding={{
              sm: 0.4,
              md: 0.4,
              lg: 1,
            }}
            bgC={light ? "warning.main" : "warning.dark"}
            fontS={{
              xs: 12,
              sm: 14,
              md: 16,
            }}
            hoverC={light ? "warning.dark" : "warning.main"}
            ButtonText="Update"
            func={modelHandler}
          />
        </Box>
        {/* <UpdateModel openn={openModel} closeHandler={modelHandler}/> */}

        <Modal
          keepMounted
          open={Boolean(openModel)}
          onClose={modelHandler}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} bgcolor={light ? "background.paper" : "grey.800"}>
            <UpdateModel handler={modelHandler} user={user} light={light} />
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default UserPage;
