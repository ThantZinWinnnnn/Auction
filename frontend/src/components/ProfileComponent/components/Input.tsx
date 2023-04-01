import { Box, InputBase, Typography } from '@mui/material'
import React from 'react'

const Input = () => {
  return (
   <>
    <Box>
    <Typography textTransform={"capitalize"} mb={1}>name</Typography>
    <InputBase value={"hello"} onChange={()=>{}} sx={{
        border :"1px solid rgba(34,36,38,.15)",
        py:1,
        px:2,
        borderRadius:1
    }}/>
    </Box>
   </>
  )
}

export default Input