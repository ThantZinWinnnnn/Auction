import { Box, Container } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import LoginSignUp from "./LoginSignUp";
import backgroundImage from "../../assets/images/bg.avif";
import {useMediaQuery,useTheme} from "@mui/material"

const Authenticate = () => {

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box
      display={'flex'}
      justifyItems='center'
      alignItems={'center'}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width:"100vw",
        height:"100vh"
      }}
    >
      <Container maxWidth='lg' sx={{bgcolor:"white" ,display:"flex"}}>
        <LoginSignUp />
        {tablet && (<Carousel/>)}
      </Container>
    </Box>
  );
};

export default Authenticate;
