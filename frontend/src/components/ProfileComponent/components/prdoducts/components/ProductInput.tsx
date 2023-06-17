import { Box, OutlinedInput, Typography } from '@mui/material'
import React, { memo } from 'react'
import { UserProductsResponse } from '../../../../Utils/apiTypes/apiTypes'

const ProductInput:React.FC<ProductInputProps> = ({p,title,value,disable}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={0.2}>
    <Typography variant="caption" fontWeight={"bold"}>
     {title}
    </Typography>
    <OutlinedInput size="small" value={value}  disabled={disable}/>
  </Box>
  )
}

export default memo(ProductInput)

interface ProductInputProps {
    p:UserProductsResponse,
    title:string,
    value:string,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
    disable?:boolean

}