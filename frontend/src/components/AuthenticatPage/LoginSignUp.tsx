import {
  Typography,
  Button,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { authAPI } from "../Utils/endpoins/axios";
import ButtonLoading from "../Utils/LoadingIndicator/ButtonLoading";
import ProductLoading from "../Utils/LoadingIndicator/ProductLoading";
import UserInput from "./UserInput";
import { ForgotPassword } from "../Utils/apiTypes/apiTypes";
import { useAuthentication } from "../../Hooks/user.customhook";
import Toast from "../ProfileComponent/components/CreateProduct/Toast";
import toast, { Toaster } from "react-hot-toast";

interface FormValues {
  username?: string;
  email: string;
  password: string;
  newPassword?: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});



const LoginSignUp = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);
  const [check, setCheck] = useState(true);
  const [forgotPs, setForgotPS] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState<boolean>(true);

  console.log("ps", forgotPs);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const checkHandler = () => setCheck(!check);
  const authenticateSuccessHandler = (data: any) => {
    console.log(data.data);
    localStorage.setItem("token", data.data.token);
    navigate("/");
    setErrorMessage("");
    reset();
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(!open);
  };

  const forgotPassSuccessHandler = (data: any) => {
    console.log(data.data);
    localStorage.setItem("token", data.data.token);
    navigate("/auth");
    setForgotPS(false);
    setErrorMessage("");
    reset();
  };

  const { isLoading: authenticating, mutate: Authenticate } = useAuthentication(
    loggedIn ? authAPI.signin : authAPI.signup,
    authenticateSuccessHandler
  );

  const {
    isLoading: updating,
    mutate: UpdatePassword,
    isSuccess: updateSuccess,
    isError: updateError,
  } = useAuthentication(authAPI.forgotPassword, forgotPassSuccessHandler);

  const onSubmitHandler = (data: FormValues) => {
    console.log("data", data);

    if (!forgotPs) {
      Authenticate(data);
    } else {
      if (forgotPs && data.password !== data.newPassword) {
        setErrorMessage("Password does not match");
      } else {
        const { email, password } = data;
        const forgotData: ForgotPassword = { email, newPass: password };
        console.log("datattt", forgotData);
        UpdatePassword(forgotData);
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={true}/>
      <Box width={"100%"} sx={{ p: 2 }} bgcolor={"white"} borderRadius={2}>
        <Box display={"flex"} alignItems="center" gap={3} mb={2}>
          <Box sx={{ width: "50px", height: "50px" }} overflow="hidden">
            <img width={"100%"} src={`/Logo.svg`} alt="logo" />
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
                {!loggedIn && !forgotPs && (
                  <UserInput
                    link="userName"
                    text="Username"
                    type="text"
                    fieldError={!!errors.username}
                    helperTitile={
                      errors?.username ? errors?.username?.message : ""
                    }
                    register={register}
                    check={"username"}
                  />
                  // <Box>
                  //   <Typography
                  //     id="userName"
                  //     sx={{
                  //       mb: 1,
                  //       fontSize: {
                  //         xs: 18,
                  //         sm: 20,
                  //       },
                  //     }}
                  //   >
                  //     Username
                  //   </Typography>
                  //   <TextField
                  //     aria-labelledby="userName"
                  //     type="text"
                  //     variant="outlined"
                  //     error={!!errors.username}
                  //     helperText={
                  //       errors?.username ? errors?.username?.message : ""
                  //     }
                  //     fullWidth
                  //     {...register("username", { required: true })}
                  //   />
                  // </Box>
                )}
                <UserInput
                  link="email"
                  text="Email"
                  type="email"
                  fieldError={!!errors.email}
                  helperTitile={errors?.email ? errors?.email?.message : ""}
                  register={register}
                  check={"email"}
                />

                <UserInput
                  link="password"
                  text={forgotPs ? "New Password" : "Password"}
                  type="password"
                  fieldError={
                    forgotPs
                      ? errors.newPassword !== errors.password
                      : !!errors.password
                  }
                  helperTitile={
                    forgotPs ? (
                      <Typography color={"red"}>{errorMessage}</Typography>
                    ) : errors?.password ? (
                      errors?.password?.message
                    ) : (
                      ""
                    )
                  }
                  register={register}
                  check={"password"}
                />

                {forgotPs && (
                  <UserInput
                    link="newPassword"
                    text="Confirm New Password"
                    type="password"
                    fieldError={errors.newPassword !== errors.password}
                    helperTitile={
                      forgotPs ? (
                        <Typography color={"red"}>{errorMessage}</Typography>
                      ) : errors?.password ? (
                        errors?.password?.message
                      ) : (
                        ""
                      )
                    }
                    register={register}
                    check={"newPassword"}
                  />
                )}
              </Box>
              <Button
                onClick={() => setForgotPS(!forgotPs)}
                variant="text"
                disableElevation
                disableRipple
                sx={{
                  mt: 2,
                  mb: 4,
                  "&:hover": {
                    bgcolor: "white",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "black",
                    textDecoration: "underline",
                    "&:hover": {
                      color: "blue",
                    },
                    textTransform: "none",
                  }}
                >
                  {forgotPs ? "Back to Sign In" : "Forgot your password?"}
                </Typography>
              </Button>
              <FormGroup>
                <FormControlLabel
                  value={check}
                  onChange={checkHandler}
                  control={<Checkbox disableRipple disableTouchRipple  sx={{
                    '&.Mui-checked': {
                      color: '#3F51B5', // Customize the checked color
                    },
                    '&:not(.Mui-checked)': {
                      color: 'grey.400', // Customize the unchecked color
                    },
                  }}/>}
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
              {updating ? (
                <Box mt={4}>
                  <ButtonLoading text="Updating..." fontSize={{xs:16,sm:18}} />
                </Box>
              ) : (
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
                    color:"white",
                    "&.Mui-disabled": {
                      background: "#eaeaea",
                      color: "#c0c0c0"
                    }
                  }}
                >
                  {forgotPs
                    ? "Change Password"
                    : !loggedIn
                    ? "Sign Up"
                    : "Sign In"}
                </Button>
              )}
            </form>
            {authenticating && <ProductLoading />}
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems="center"
              sx={{
                mt: 2,
              }}
            >
              <Typography color={"#D1D0CC"}>
                {!loggedIn
                  ? "Already have an account?"
                  : "Don't have an account?"}
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

      {updateSuccess ? (
        <Toast
          open={open}
          handleClose={handleClose}
          info="success"
          message="Successfully updated Password"
          Xaxis="center"
          Yaxis="top"
        />
      ) : null}
      {updateError ? (
        <Toast
          open={open}
          handleClose={handleClose}
          info="error"
          message={"Unsuccessful update Password.Please Try Again"}
          Xaxis="center"
          Yaxis="top"
        />
      ) : null}
    </>
  );
};

export default LoginSignUp;
