import {
  Container,
  OutlinedInput,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Paper,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/images/logo.svg";
import * as yup from "yup";
import { CheckBox } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
  const [loggedIn, setLoggedIn] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  const onSubmitHandler = (data) => console.log(data);

  return (
    <Box width={desktop ? "50%" : "100%"} minHeight="100vh" sx={{ p: 2 }}>
      <Box display={"flex"} alignItems="center" gap={3} mb={2}>
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
      <Box sx={{ pt: 4 }}>
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
          }}
        >
          Warmly , Welcome back
        </Typography>
        <Typography
          textAlign={"center"}
          variant="body1"
          fontWeight={"light"}
          color="#8C8E95"
        >
          Please enter your details.
        </Typography>
        <Box
          width={"98%"}
          mx={"auto"}
          sx={{
            mt: 10,
            width: {
              xs: "98%",
              sm: "80%",
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
              {loggedIn && (
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
                    helperText={errors.username ? errors?.username.message : ""}
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
                  helperText={errors.email ? errors?.email.message : ""}
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
                  helperText={errors.password ? errors?.password.message : ""}
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
              {loggedIn ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            sx={{
              mt: 2,
            }}
          >
            <Typography color={"#D1D0CC"}>
              {loggedIn ? "Already have an account?" : "Don't have an account?"}
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
              {loggedIn ? "Sign In" : "Sign Up"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSignUp;
