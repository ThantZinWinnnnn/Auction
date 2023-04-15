import {
  Box,
  Divider,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const theme = useTheme();
  const is4kScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const Mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box bgcolor={"#102343"} py={Mobile ? 4 : 4} color="white" mt={"auto"}>
      <Container maxWidth={is4kScreen ? "xl" : "lg"} sx={{height:{
        xs:400,
        sm:180
      }}}>
        <Box
          display={"flex"}
          mb={Mobile ? 5 : 5}
          flexDirection={Mobile ? "column" : "row"}
        >
          <Box
            display={"flex"}
            width="70%"
            textAlign={"left"}
            gap={"15%"}
            flexDirection={Mobile ? "column" : "row"}
            mb={Mobile ? 1 : 0}
          >
            <Box>
              <Link to={"/singup"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 3}
                  component={"p"}
                >
                  Account Setting
                </Typography>
              </Link>
              <Link to={"/bid"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 0}
                  component={"p"}
                >
                  Bidding
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link to={"/selling"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 3}
                  component={"p"}
                >
                  Selling
                </Typography>
              </Link>
              <Link to={"/auctions"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 0}
                  component={"p"}
                >
                  Online Auctions
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link to={"/order"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 1 : 3}
                  component={"p"}
                >
                  Favourite Products
                </Typography>
              </Link>
              <Link to={"/contact"}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  color={"white"}
                  variant={"caption"}
                  fontWeight={"bold"}
                  mb={Mobile ? 4 : 0}
                  component={"p"}
                >
                  Contact Us
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box
            width={Mobile ? "70%" : "30%"}
            display="flex"
            justifyContent={Mobile ? "space-between" : "space-evenly"}
            px={ 0}
            mb={0}
          >
            <Link to={"/facebook"}>
              <FacebookIcon
                sx={{ color: "white", "&:hover": { color: "warning.main" } }}
                fontSize={"medium"}
              />
            </Link>

            <Link to={"/twitter"}>
              <TwitterIcon
                sx={{ color: "white", "&:hover": { color: "warning.main" } }}
                fontSize={"medium"}
              />
            </Link>

            <Link to={"/instagram"}>
              <InstagramIcon
                sx={{ color: "white", "&:hover": { color: "warning.main" } }}
                fontSize={"medium"}
              />
            </Link>

            <Link to={"/linkedIn"}>
              <LinkedInIcon
                sx={{ color: "white", "&:hover": { color: "warning.main" } }}
                fontSize={"medium"}
              />
            </Link>
          </Box>
        </Box>
        <Divider sx={{ bgcolor: "white" }} variant="fullWidth" light={true} />
        <Box
          width={Mobile ? "60%" : "70%"}
          mx="auto"
          display={"flex"}
          flexDirection={Mobile ? "column" : "row"}
          justifyContent={Mobile ? "center" : 'space-between'}
          gap={Mobile? 4 : 0}
          mt={2}
          mb={Mobile ? 4 : 4}
          textAlign={'center'}
        >
          <Typography variant="body2">Terms & Conditions</Typography>
          <Typography variant="body2">Privacy & Cookie Policy</Typography>
        </Box>
        <Typography variant="caption" fontWeight={"medium"}>@Thant Zin Win 2023</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
