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
import { useLocation } from "react-router-dom";
import {
  overviewData,
  electronicCategories,
  watchesCategories,
  jewelleryCategories,
  vehicleCategories,
  fashionCategories,
  handbagCategories,
} from "../../data/DummyData";

const BannerDetail = () => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const image =
    location.pathname === "/auction/electronic"
      ? overviewData.electronicUrl
      : location.pathname === "/auction/watches"
      ? overviewData.watchesUrl
      : location.pathname === "/auction/jewellery"
      ? overviewData.jewelleryUrl
      : location.pathname === "/auction/vehicle"
      ? overviewData.vehicleUrl
      : location.pathname === "/auction/fashion"
      ? overviewData.fashionUrl
      : overviewData.handbagUrl;

  const category =
    location.pathname === "/auction/electronic"
      ? electronicCategories
      : location.pathname === "/auction/watches"
      ? watchesCategories
      : location.pathname === "/auction/jewellery"
      ? jewelleryCategories
      : location.pathname === "/auction/vehicle"
      ? vehicleCategories
      : location.pathname === "/auction/fashion"
      ? fashionCategories
      : handbagCategories;

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
          backgroundImage: `url(${image})`,
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
          Online{" "}
          {location.pathname === "/auction/electronic"
            ? "Electronic"
            : location.pathname === "/auction/watches"
            ? "Watches"
            : location.pathname === "/auction/jewellery"
            ? "Jewellery"
            : location.pathname === "/auction/vehicle"
            ? "Vehicles"
            : location.pathname === "/auction/fashion"
            ? "Clothing"
            : "Handbag"}{" "}
          Auctions
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
      <ChooseDetailsCategory categories={category}/>
      <SellWithUs />
      <MoreAuctions />
    </Box>
  );
};

export default BannerDetail;
