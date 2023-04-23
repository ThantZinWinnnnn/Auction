import { Alert, Snackbar, SnackbarOrigin } from '@mui/material'
import React from 'react'

interface ToastProps{
    open:boolean,
    handleClose:(event?: React.SyntheticEvent | Event, reason?: string)=> void,
    info: 'error' | 'success',
    message:string,
    Xaxis:"center" | "left" | "right",
    Yaxis: "top" | "bottom"
}

const Toast:React.FC<ToastProps> = ({open,handleClose,info,message,Xaxis,Yaxis}) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{horizontal:Xaxis,vertical:Yaxis}}>
        <Alert onClose={handleClose} severity={info} sx={{width: "100%",bgcolor:"black",color:"white"}}>
          {message}
        </Alert>
      </Snackbar>
  )
}

export default Toast