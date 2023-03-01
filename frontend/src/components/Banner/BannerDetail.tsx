import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import ChooseDetailsCategory from "../DetailPageComponent/ChooseDetailsCategory";
import Description from "../DetailPageComponent/Description";
import MoreAuctions from "../DetailPageComponent/MoreAuctions";
import SellWithUs from "../DetailPageComponent/SellWithUs";

const BannerDetail = () => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box
        width={"100%"}
        display="flex"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        overflow="hidden"
        sx={{
          height: {
            xs: "400px",
            sm: "500px",
            md: "600px",
          },
          backgroundImage: `url('https://uploads-ssl.webflow.com/61dc384cdd32214e08c06a78/6230a4b50eedd6edaa6890a3_Electronics-Hero-Image2.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        <Typography
          color="common.white"
          fontWeight={"bold"}
          marginBottom={Mobile ? "8%" : "4%"}
          sx={{
            width: {
              xs: "300px",
              sm: "500px",
              md: "940px",
            },
            fontSize: {
              xs: "2.5rem",
              sm: "4rem",
              md: "6rem",
            },
          }}
        >
          Online Electronics Auctions
        </Typography>
        <Box
          display={"flex"}
          gap={Mobile ? 0 : 4}
          flexDirection={Mobile ? "column" : "row"}
        >
          <Button
            disableRipple
            disableFocusRipple
            disableElevation
            variant="contained"
            color="warning"
            sx={{
              textTransform: "none",
              borderRadius: 10,
              px: 2,
              py: 1,
              "&:hover": {
                backgroundColor: "#102343",
              },
              fontSize: 18,
            }}
          >
            Explore Auctions
          </Button>
          {!Mobile && (
            <Button
              disableRipple
              disableFocusRipple
              disableElevation
              variant="contained"
              color="warning"
              sx={{
                textTransform: "none",
                borderRadius: 10,
                px: 7,
                py: 1,
                "&:hover": {
                  backgroundColor: "#102343",
                },
                fontSize: 18,
              }}
            >
              Sign Up
            </Button>
          )}
        </Box>
      </Box>
      <Description />
      <ChooseDetailsCategory />
      <SellWithUs />
      <MoreAuctions />
    </Box>
  );
};

export default BannerDetail;
