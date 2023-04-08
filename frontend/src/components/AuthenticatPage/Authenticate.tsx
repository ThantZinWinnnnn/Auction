import { Box, Container } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import LoginSignUp from "./LoginSignUp";
import backgroundImage from "../../assets/images/bg.avif";
import { useMediaQuery, useTheme } from "@mui/material";

const Authenticate = () => {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up("md"));
  const Desktop = useMediaQuery(theme.breakpoints.up('xl'));
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      sx={{
        bgcolor:"#EEF2F6",
        width: "100vw",
        minHeight: "100vh",
      }}
    >
     <Box>
     <LoginSignUp />
     </Box>
    </Box>
  );
};

export default Authenticate;
