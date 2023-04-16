import { Box, TextField, Typography } from "@mui/material";
import React from "react";
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
        aria-labelledby={link}
        type={type}
        variant="outlined"
        error={fieldError}
        helperText={helperTitile}
        fullWidth
        {...register(check, { required: true })}
      />
    </Box>
  );
};

export default UserInput;
