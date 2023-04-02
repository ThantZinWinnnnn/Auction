
import { Box, Divider, Typography, useMediaQuery ,useTheme} from "@mui/material";
import React from "react";


interface detail {
  name: string;
  value?: string;
  price?: number;
}
const ProductInfo: React.FC<detail> = ({ name, value, price }) => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} sx={{mb:{
        lg:1,
        md:0.5,
        xs:1
      }}}>
      <Typography variant={Mobile ? "body2" : "caption"} fontWeight={"medium"}>{name}</Typography>
      <Typography variant={ "caption"}>
        {price === undefined ? `${value}` : `${price} MMKS`}
      </Typography>
    </Box>
    </>
  );
};

export default ProductInfo;
