import Container from "@mui/material/Container";
import {
  Box,
  Divider,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import FeaturedLots from "./FeaturedLots";
import Footer from "../Footer/Footer";
import FeaturedLots2 from "./FeaturedLots2";

const ProdudctDetail = () => {
  const theme = useTheme();
  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const Mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Navbar />
      <Container maxWidth={is4kScreen ? "xl" : "lg"} sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", gap: "2%", mt: 2 }} flexDirection={Mobile ? "column" : "row"}>
          <Box sx={{ width:{
            xs:"100%",
            sm:"22%"
          }}}>
            <Box sx={{ mb: 1, paddingX:{
              xs:0,sm:3
            } }} overflow="hidden">
              <Link to={"/detail"}>
                <img
                  width={"100%"}
                  src="https://portal-images.azureedge.net/auctions-2023/wi415169/images/27d95c96-e885-4da2-9521-fb82562ac93e.jpeg?w=250"
                  alt="categories image"
                />
              </Link>
            </Box>
            <Typography component={"div"} textAlign="center" fontWeight={"bold"} mb={Mobile ? 2 : 0}  sx={{
                  fontSize:{
                    xs:"1.2rem",
                    xl:"0.75rem"
                  }
                }}>
              Thant Zin Win
            </Typography>
          </Box>

          <Box sx={{ width:{
            sm:"56%",
            md:"58%"
          } }}>
            <Link to={"/detail"}>
              <Typography
                color={"black"}
                fontWeight="bold"
                component={"div"}
                sx={{
                  marginBottom: 1.5,
                  "&:hover": {
                    color: "primary.light",
                  },
                  fontSize:{
                    xs:"1.4rem",
                    sm:"1.25rem"
                  }
                }}
              >
                No Reserve Pallets of Customer Returns I Small Domestic
                Appliances, Fashion, Toys & Furniture - Sourced from a Major UK
                Retailer
              </Typography>
            </Link>
            <Typography
              component={"h5"}
              fontWeight={"bold"}
              sx={{ mb: 1,fontSize:{
                xs:"1.1rem",
                sm:"0.875rem"
              } }}
            >
              Auction dates
            </Typography>
            <Typography
              sx={{
                  fontSize:{
                    xs:"1rem",
                    xl:"0.75rem"
                  }
                }}
              component={"h6"}
              marginBottom={"0.1rem"}
            >
              Starts: Feb 08, 2023 12:00 PM GMT
            </Typography>
            <Typography sx={{
                  fontSize:{
                    xs:"1rem",
                    xl:"0.75rem"
                  }
                }} component={"h6"}>
              Ends from: Feb 21, 2023 01:00 PM GMT
            </Typography>
            <Box display={"flex"} sx={{ gap: "30%", mt: 3, mb: 1 }}>
              <Typography
                variant="subtitle2"
                component={"h5"}
                fontWeight={"bold"}
              >
                Auction currency
              </Typography>
              <Typography sx={{
                  fontSize:{
                    xs:"1.1rem",
                    xl:"0.75rem"
                  }
                }} component={"h6"}>
                MMK
              </Typography>
            </Box>
            <Divider />
            <Box display={"flex"} sx={{ gap: "30%", mt: 3, mb: 1 }}>
              <Typography
                variant="subtitle2"
                component={"h5"}
                fontWeight={"bold"}
              >
                Buyer's premium
              </Typography>
              <Typography sx={{
                  fontSize:{
                    xs:"1.1rem",
                    xl:"0.75rem"
                  }
                }} component={"h6"}>
                25 %
              </Typography>
            </Box>
            <Divider />
            <Box display={"flex"} sx={{ gap: "24%", mt: 3, mb: 1 }}>
              <Typography
                variant="subtitle2"
                component={"h5"}
                fontWeight={"bold"}
              >
                Accepted for payment
              </Typography>
              <Box
                width={"75px"}
                height="30px"
                overflow={"hidden"}
                display="flex"
                gap={2}
              >
                <img
                  width={"50%"}
                  src="https://th.bing.com/th?q=Kbz+Pay+Logo.png&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=MM&setlang=en&adlt=moderate&t=1&mw=247"
                  alt="kbz pay logo"
                />
                <img
                  width={"50%"}
                  src="https://th.bing.com/th/id/OIP.DKCLUwFCa1rywQLs-HGpGwAAAA?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="wavemoney logo"
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: {
                xs:"100%",
                sm:"22%",
                md: "20%",
                lg: "16%",
              },
              my:Mobile ? 4 : 0
            }}
          >
            <Link to={"/register"}>
              <Button
                fullWidth
                variant="contained"
                color="warning"
                disableElevation
                sx={{
                  textTransform: "none",
                  py:1,
                  fontSize:{
                    xs:"1.4rem",
                    sm:"1em"
                  }
                }}
              >
                Register to Bid
              </Button>
            </Link>
          </Box>
        </Box>
        <Divider />
        <FeaturedLots2 />
      </Container>
      <Footer />
    </>
  );
};

export default ProdudctDetail;
