
import { Box, Divider, Typography, useMediaQuery ,useTheme} from "@mui/material";
import React from "react";


interface detail {
  name: string;
  value?: string;
  price?: number;
}
const ProductInfo: React.FC<detail> = ({ name, value, price }) => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const largeScreen = useMediaQuery(theme.breakpoints.up('xl'))
  const formatPrice = price?.toLocaleString('en-US')

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} sx={{mb:{
        lg:1,
        md:0.5,
        xs:1
      }}}>
      <Typography fontWeight={"medium"} fontSize={largeScreen ? "14px" : mediumScreen ? "12px" : "11px"}>{name}</Typography>
      <Typography fontSize={largeScreen ? "14px" : mediumScreen ? "12px" : "11px"} fontWeight={'bold'}>
        {price === undefined ? `${value}` : `${formatPrice} MMKS`}
      </Typography>
    </Box>
    </>
  );
};

export default ProductInfo;
