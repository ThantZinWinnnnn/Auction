import {
  Container,
  OutlinedInput,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/logo.svg";


interface FormValues{
  username?:string,
  email:string,
  password:string
}

const LoginSignUp = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      width={desktop ? "50%" : "100%"}
      height="100vh"
      sx={{ p: 2 }}
    >
      <Box display={"flex"} alignItems="center" gap={3} mb={12}>
        <Box sx={{ width: "50px", height: "50px" }} overflow="hidden">
          <img width={"100%"} src={`${logo}`} alt="logo" />
        </Box>
        <Typography
          fontWeight={"bold"}
          color="#FF4500"
          letterSpacing={2}
          variant="h6"
        >
          Auctions
        </Typography>
      </Box>
      <Box sx={{pt:4}}>
        <Typography textAlign={"center"} fontWeight="bold" sx={{
          fontSize:{
            xs:26
          },
          mb:{
            xs:2
          }
        }}>
          Warmly , Welcome back
        </Typography>
        <Typography
          textAlign={"center"}
          variant="body2"
          fontWeight={"light"}
          color='#8C8E95'
        >
          Please enter your details.
        </Typography>
        <Box width={'95%'} mx={'auto'} sx={{
          mt:12
        }}>
          <Box>
            <Typography sx={{
              fontSize:{
                xs:18
              }
            }} component={'div'}>Email</Typography>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSignUp;
