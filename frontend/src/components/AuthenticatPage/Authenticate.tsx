import { Box} from "@mui/material";
import LoginSignUp from "./LoginSignUp";
import { Title } from "../Utils/helmet/Title";


const Authenticate = () => {

  return (
   <>
    <Title title="LogIn | SignUp Page"/>
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
   </>
  );
};

export default Authenticate;
