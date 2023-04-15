import { Box, InputBase, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Utils/ThemeContext/ThemeContext'

interface input{
  name:string,
  text:string,
  id:string,
  handlerFun:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>void
}

const Input:React.FC<input> = ({name,text,handlerFun,id}) => {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { themeMode } = useContext(ThemeContext);
  const light = themeMode === "light"

  return (
   <>
    <Box mb={Mobile ? 1 : 2} id={id}>
    <Typography textTransform={"capitalize"} fontWeight={'bold'} fontSize={Mobile ? 14 : 16} color={light ? "black" : "white"}  mb={1}>{name}</Typography>
    <InputBase value={text}  onChange={handlerFun} sx={{
        border :light ? "1px solid rgba(34,36,38,.15)" : "1px solid white",
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