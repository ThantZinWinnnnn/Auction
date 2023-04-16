import {
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "/logo.svg";
import * as yup from "yup";
import { Link,useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authAPI } from "../Utils/endpoins/axios";
import ButtonLoading from "../Utils/LoadingIndicator/ButtonLoading";
import ProductLoading from "../Utils/LoadingIndicator/ProductLoading";

interface FormValues {
  username?: string;
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const LoginSignUp = () => {

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);
  const [check,setCheck] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const checkHandler = ()=> setCheck(!check);



  const {isLoading:authenticating,mutate:Authenticate} = useMutation(loggedIn ? authAPI.signin : authAPI.signup,{
    onSuccess:(data)=>{
      console.log(data.data)
      localStorage.setItem("token",data.data.token)
      navigate('/')
    },
    onError:()=>{
      navigate('/auth')
    }
  });


  const onSubmitHandler = (data:FormValues) => {
      console.log("data" , data)

      Authenticate(data)
  };


  return (
    <Box width={"100%"} sx={{ p: 2 }} bgcolor={"white"} borderRadius={2}>
      <Box display={"flex"} alignItems="center" gap={3} mb={2}>
        <Box sx={{ width: "50px", height: "50px" }} overflow="hidden">
          <img width={"100%"} src={`/whiteLogo.svg`} alt="logo" />
        </Box>
        <Typography
          fontWeight={"bold"}
          color="#673AB7"
          letterSpacing={2}
          variant="h6"
        >
          Auctions
        </Typography>
      </Box>
      <Box sx={{ pt: 1 }}>
        <Typography
          textAlign={"center"}
          fontWeight="bold"
          sx={{
            fontSize: {
              xs: 26,
            },
            mb: {
              xs: 2,
            },
            color: "#673AB7",
          }}
        >
          Hi , Welcome back
        </Typography>
        <Typography
          textAlign={"center"}
          variant="body1"
          fontWeight={"light"}
          color="#8C8E95"
        >
          Enter your credentials to continue
        </Typography>
        <Box
          sx={{
            mt: 5,
            width: {
              xs: "98%",
              sm: "100%",
            },
            px: {
              lg: 1,
            },
          }}
        >
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <Box
              display={"flex"}
              flexDirection="column"
              sx={{
                gap: 3,
              }}
            >
              {!loggedIn && (
                <Box>
                  <Typography
                    id="userName"
                    sx={{
                      mb: 1,
                      fontSize: {
                        xs: 18,
                        sm: 20,
                      },
                    }}
                  >
                    Username
                  </Typography>
                  <TextField
                    aria-labelledby="userName"
                    type="text"
                    variant="outlined"
                    error={!!errors.username}
                    helperText={errors?.username ? errors?.username?.message : ""}
                    fullWidth
                    {...register("username", { required: true })}
                  />
                </Box>
              )}
              <Box>
                <Typography
                  id="email"
                  sx={{
                    mb: 1,
                    fontSize: {
                      xs: 18,
                      sm: 20,
                    },
                  }}
                >
                  Email
                </Typography>
                <TextField
                  aria-labelledby="email"
                  type="email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors?.email ? errors?.email?.message : ""}
                  fullWidth
                  {...register("email", { required: true })}
                />
              </Box>

              <Box>
                <Typography
                  id="password"
                  fontWeight={"medium"}
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 20,
                    },
                  }}
                >
                  Password
                </Typography>
                <TextField
                  aria-labelledby="password"
                  type="password"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors?.password ? errors?.password?.message : ""}
                  fullWidth
                  {...register("password", { required: true })}
                />
              </Box>
            </Box>
            <Link to={"/forgotpassword"}>
              <Typography
                sx={{
                  color: "black",
                  textDecoration: "underline",
                  mb: 6,
                  mt: 2,
                  "&:hover": {
                    color: "blue",
                  },
                }}
              >
                Forgot your password?
              </Typography>
            </Link>
            <FormGroup>
              <FormControlLabel
                value={check}
                onChange={checkHandler}
                control={<Checkbox disableRipple disableTouchRipple />}
                label={
                  <Typography
                    textAlign={"left"}
                    sx={{
                      fontSize: {
                        xs: 14,
                        sm: 16,
                      },
                    }}
                  >
                    I agree to the{" "}
                    <span style={{ color: "blue" }}>Terms & Conditions</span>{" "}
                    and <span style={{ color: "blue" }}>Privacy Policy</span>
                  </Typography>
                }
              />
            </FormGroup>
            <Button
              disableElevation
              disableRipple
              fullWidth
              disabled={check || authenticating}
              variant="contained"
              type="submit"
              sx={{
                textTransform: "none",
                bgcolor: "#181818",
                mt: 4,
                py: 1.5,
                fontSize: {
                  xs: 16,
                  sm: 18,
                },
                "&:hover": {
                  bgcolor: "grey.800",
                },
              }}
            >
             {!loggedIn ? "Sign Up" : "Sign In"}
            </Button>
          </form>
              {authenticating && <ProductLoading/>}
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            sx={{
              mt: 2,
            }}
          >
            <Typography color={"#D1D0CC"}>
              {!loggedIn ? "Already have an account?" : "Don't have an account?"}
            </Typography>
            <Button
              disableRipple
              disableElevation
              onClick={() => setLoggedIn(!loggedIn)}
              sx={{
                textTransform: "none",
                color: "black",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {!loggedIn ? "Sign In" : "Sign Up"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSignUp;
