import { Box, InputBase, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

interface input{
  name:string,
  text:string,
  id:string,
  handlerFun:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void
}

const Input:React.FC<input> = ({name,text,handlerFun,id}) => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
   <>
    <Box mb={Mobile ? 1 : 2} id={id}>
    <Typography textTransform={"capitalize"} fontWeight={'bold'} fontSize={Mobile ? 14 : 16}  mb={1}>{name}</Typography>
    <InputBase value={text}  onChange={handlerFun} sx={{
        border :"1px solid rgba(34,36,38,.15)",
        py:1,
        px:2,
        borderRadius:1,
        fontSize:{
          xs:14,
          sm:16
        }
    }}
    fullWidth
    />
    </Box>
   </>
  )
}

export default Input