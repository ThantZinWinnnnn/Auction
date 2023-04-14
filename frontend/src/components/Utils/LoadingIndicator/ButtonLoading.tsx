import { LoadingButton } from '@mui/lab'
import React from 'react'

interface ButtonProps{
    text:string
}

const ButtonLoading:React.FC<ButtonProps> = ({text}) => {
  return <LoadingButton loading variant="outlined" fullWidth loadingPosition="start" sx={{
    p:{
     xs: 1.4,
     sm: 1.6,
     md: 1.7,
    },
    fontSize:16,
    textTransform:"none",
    display:"flex",
    gap:1
   }}>{text}</LoadingButton>
}

export default ButtonLoading