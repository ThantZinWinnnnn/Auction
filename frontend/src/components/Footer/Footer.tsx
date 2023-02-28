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

  return (
    <Box bgcolor={"#102343"} py={8} color="white">
      <Container maxWidth={is4kScreen ? "xl" : "lg"}>
        <Box display={"flex"} mb={10}>
          <Box display={"flex"} width="70%" textAlign={"left"} gap={"15%"}>
            <Box>
              <Link to={"/singup"}>
                <Typography sx={{"&:hover":{
                  color:"warning.main"
                }}} color={"white"} variant="body2" fontWeight={'bold'} mb={6} component={"p"}>Sign Up for Email</Typography>
              </Link>
              <Link to={"/bid"}>
                <Typography sx={{"&:hover":{
                  color:"warning.main"
                }}} color={"white"} variant="body2" fontWeight={'bold'} component={"p"}>Bidding</Typography>
              </Link>
            </Box>
            <Box>
              <Link to={"/selling"}>
                <Typography sx={{"&:hover":{
                  color:"warning.main"
                }}} color={"white"} variant="body2" fontWeight={'bold'} mb={6} component={"p"}>Selling</Typography>
              </Link>
              <Link to={"/auctions"}>
                <Typography sx={{"&:hover":{
                  color:"warning.main"
                }}} color={"white"} variant="body2" fontWeight={'bold'} component={"p"}>Online Auctions</Typography>
              </Link>
            </Box>
            <Box>
              <Link to={"/order"}>
                <Typography sx={{"&:hover":{
                  color:"warning.main"
                }}} color={"white"} variant="body2" fontWeight={'bold'} mb={6} component={"p"}>Orders & Payments</Typography>
              </Link>
              <Link to={"/contact"}>
                <Typography sx={{"&:hover":{
                  color:"warning.main"
                }}} color={"white"} variant="body2" fontWeight={'bold'} component={"p"}>Contact Us</Typography>
              </Link>
            </Box>
          </Box>
          <Box width={"30%"} display='flex' justifyContent={"space-evenly"}>
            <Link to={"/facebook"}>
              <FacebookIcon sx={{ color: "white","&:hover":{color:"warning.main"} }} fontSize={"large"} />
            </Link>
            <Link to={"/twitter"}>
              <TwitterIcon sx={{ color: "white","&:hover":{color:"warning.main"} }} fontSize={"large"} />
            </Link>
            <Link to={"/instagram"}>
              <InstagramIcon sx={{ color: "white","&:hover":{color:"warning.main"} }} fontSize={"large"} />
            </Link>
            <Link to={"/linkedIn"}>
              <LinkedInIcon sx={{ color: "white" ,"&:hover":{color:"warning.main"}}} fontSize={"large"} />
            </Link>
          </Box>
        </Box>
        <Divider sx={{bgcolor:"white"}} variant="fullWidth" light={true}/>
        <Box width={"70%"} mx="auto" display={'flex'} justifyContent={"space-between"} mt={2} mb={4}>
          <Typography variant="subtitle2">Terms & Conditions</Typography>
          <Typography variant="subtitle2">Privacy & Cookie Policy</Typography>
        </Box>
        <Typography fontWeight={'medium'}>@Thant Zin Win 2023</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
