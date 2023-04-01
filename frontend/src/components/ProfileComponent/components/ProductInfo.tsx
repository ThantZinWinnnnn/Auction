import { Box, Typography } from "@mui/material";
import React from "react";
import { number } from "yup";

interface detail{
    name:string,
    value?: string,
    price?:number
}
const ProductInfo:React.FC<detail>= ({name,value,price}) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'}>
      <Typography>{name}</Typography>
       <Typography>{price === undefined ? `${value}` : `${price} MMKS`}</Typography> 
    </Box>
  );
};

export default ProductInfo;
