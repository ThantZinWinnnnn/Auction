import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ChooseDetailsCategory from "../DetailPageComponent/ChooseDetailsCategory";
import Description from "../DetailPageComponent/Description";
import MoreAuctions from "../DetailPageComponent/MoreAuctions";
import SellWithUs from "../DetailPageComponent/SellWithUs";
import { useLocation, useParams } from "react-router-dom";
import {
  overviewData,
  electronicCategories,
  watchesCategories,
  jewelleryCategories,
  vehicleCategories,
  fashionCategories,
  handbagCategories,
} from "../../data/DummyData";
import { Title } from "../Utils/helmet/Title";
import { ThemeContext } from "../Utils/ThemeContext/ThemeContext";
import { useContext } from "react";

const BannerDetail = () => {
  const {electronic} = useParams()
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();
  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light";

  const content = `${electronic}`;
  const title = content[0]?.toUpperCase() + content.slice(1);
  console.log("",title)



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
      <Title title={`${title} Auction Page`}/>
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
          marginBottom={Mobile ? "20%" : "5%"}
          sx={{
            width: {
              xs: "300px",
              sm: "500px",
              md: "940px",
            },
            fontSize: {
              xs: "2.8rem",
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
            sx={{
              textTransform: "none",
              borderRadius: 10,
              px: 3,
              py: 1,
              bgcolor:light ? "warning.main" : "warning.dark",
              color:"white",
              "&:hover": {
                backgroundColor: "#102343",
              },
              fontSize: 18,

            }}
          >
            Explore Auctions
          </Button>
          {/* {!Mobile && (
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
          )} */}
        </Box>
      </Box>
      <Description light={light} />
      <ChooseDetailsCategory categories={category} light={light}/>
      <SellWithUs light={light} />
      <MoreAuctions light={light} />
    </Box>
  );
};

export default BannerDetail;
