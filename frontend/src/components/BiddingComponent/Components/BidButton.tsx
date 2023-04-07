import React, { ReactNode } from "react";
import { Button } from "@mui/material";

interface actionButton {
  ButtonText: string;
  icon?: ReactNode;
  padding: object;
  fontS: object;
  bgC: string;
  hoverC: string;
  func: () => void;
}

const BidButton = (props: actionButton) => {
  return (
    <Button
      variant="contained"
      disableElevation
      disableRipple
      fullWidth
      sx={{
        textTransform: "none",
        py: props.padding,
        color: "white",
        bgcolor: props.bgC,
        fontSize: props.fontS,
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: props.hoverC,
        },
      }}
      startIcon={props.icon}
      onClick={props.func}
    >
      {props.ButtonText}
    </Button>
  );
};

export default BidButton;
