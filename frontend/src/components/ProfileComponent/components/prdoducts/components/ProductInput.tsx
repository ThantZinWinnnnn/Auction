import { Box, OutlinedInput, Typography } from '@mui/material'

import React, { memo } from 'react'



const ProductInput:React.FC<ProductInputProps> = ({title,value,disable,changeHanler}) => {

  return (
    <Box display={"flex"} flexDirection={"column"} gap={0.2}>
    <Typography fontWeight={"semibold"} sx={{
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