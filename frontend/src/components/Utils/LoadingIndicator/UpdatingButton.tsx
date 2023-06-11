import React from "react";
import { LoadingButton } from "@mui/lab";

interface ButtonProps {
  text: string;
}

const UpdatingButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <LoadingButton
      loading
      variant="outlined"
      fullWidth
      loadingPosition="start"
      sx={{
        p: {
          sm: 1,
        },
        fontSize: {
          xs: 11,
          md:13
        },
        textTransform: "none",
        display: "flex",
        gap: 0,
      }}
    >
      {text}
    </LoadingButton>
  );
};

export default UpdatingButton;
