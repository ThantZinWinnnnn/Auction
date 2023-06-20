import { ThemeContext } from "../Utils/ThemeContext/ThemeContext";
import { Box, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface FormValues {
  username?: string;
  email: string;
  password: string;
  newPassword?: string;
}

interface InputProps {
  link: string;
  type: string;
  text: string;
  register: UseFormRegister<FormValues>;
  check: "username" | "email" | "password" | "newPassword";
  fieldError :boolean,
  helperTitile:React.ReactNode
}

 const UserInput: React.FC<InputProps> = ({
register,
  link,
  text,
  check,
  type,
  fieldError,
  helperTitile
}) => {
  const { themeMode, handleThemeToggle } = useContext(ThemeContext);
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const light = themeMode === "light";

  return (
    <Box>
      <Typography
        id={link}
        sx={{
          mb: 1,
          fontSize: {
            xs: 18,
            sm: 20,
          },
        }}
      >
        {text}
      </Typography>
      <TextField
        size={largeScreen ? "medium" : "small"}
        aria-labelledby={link}
        type={type}
        variant="outlined"
        error={fieldError}
        helperText={helperTitile}
        sx={{
          bgcolor:light ?"white" :"grey.200",
          borderRadius:"10px",
          "& .MuiOutlinedInput-root": {
            color:"black",
          },
          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'grey.400',
            borderWidth: '1px', // Customize the focus color
          },
        }}
        fullWidth
        {...register(check, { required: true })}
      />
    </Box>
  );
};

export default UserInput;
