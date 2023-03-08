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
      justifyItems="center"
      alignItems={"center"}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        minHeight: "100vh",
        overflow:mobile ? "scroll" : "hidden"
      }}
    >
      <Container
        disableGutters
        maxWidth="xl"
        
        sx={{
          bgcolor: "white",
          display: "flex",
          maxHeight:Desktop ? "95vh":"auto",
          borderRadius: 2,
        }}
      >
        <LoginSignUp />
        {tablet && <Carousel />}
      </Container>
    </Box>
  );
};

export default Authenticate;
