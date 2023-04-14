import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

const ProductLoading: React.FC = () => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default ProductLoading;
