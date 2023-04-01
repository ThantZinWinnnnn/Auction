import { Box, InputBase, Typography } from '@mui/material'
import React from 'react'

interface input{
  name:string,
  text:string,
  id:string,
  handlerFun:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void
}

const Input:React.FC<input> = ({name,text,handlerFun,id}) => {
  return (
   <>
    <Box mb={2} id={id}>
    <Typography textTransform={"capitalize"} fontWeight={'bold'} mb={1}>{name}</Typography>
    <InputBase value={text} onChange={handlerFun} sx={{
        border :"1px solid rgba(34,36,38,.15)",
        py:1,
        px:2,
        borderRadius:1,
    }}
    fullWidth
    />
    </Box>
   </>
  )
}

export default Input