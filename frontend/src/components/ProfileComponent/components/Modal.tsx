import { Box, Typography } from '@mui/material'
import React from 'react'

const Modal = () => {
  return (
    <>
        <Box sx={{
            zIndex:50,
            bgcolor:"red"
        }}>
            <Typography>Model</Typography>
        </Box>
    </>
  )
}

export default Modal