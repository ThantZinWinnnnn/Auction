import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const SellWithUsText: React.FC<PropsText> = ({ text, color,variant }) => {
  return (
    <Typography
      component={motion.span}
      variants={variant}
      sx={{
        fontSize: {
          xs: "2.5rem",
          sm: "4rem",
          md: "6rem",
        },
        overflow:"hidden"
      }}
      fontWeight={"bold"}
      color={color}
    >
      {text}
    </Typography>
  );
};

export default SellWithUsText;

interface PropsText {
  text: string;
  color: string;
  variant:any
}
