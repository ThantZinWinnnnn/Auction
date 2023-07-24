import { Box, OutlinedInput, Typography, useTheme } from '@mui/material'

import React, { memo, useContext } from 'react'
import { ThemeContext } from '../../../../Utils/ThemeContext/ThemeContext';



const ProductInput:React.FC<ProductInputProps> = ({title,value,disable,changeHanler}) => {
  const theme = useTheme();
  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light";

  return (
    <Box display={"flex"} flexDirection={"column"} gap={0.2}>
    <Typography fontWeight={"semibold"} color={light ? "black" :"white"} sx={{
      fontSize:{
        sm:10.8,
        md:13,
      }
    }}>
     {title}
    </Typography>
    <OutlinedInput size="small" value={value} disabled={disable} onChange={changeHanler}/>
  </Box>
  )
}

export default memo(ProductInput)

interface ProductInputProps {
    title:string,
    value:string,
    changeHanler?:(e:React.ChangeEvent<HTMLInputElement>) => void
    disable?:boolean

}