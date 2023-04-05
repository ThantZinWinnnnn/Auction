import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const CreateProduct = () => {
  return (
    <>
        <Box component={'form'} onSubmit={()=>{}}>
            <Paper sx={{boxShadow:"rgb(0 0 0 / 4%) 0px 5px 22px, rgb(0 0 0 / 3%) 0px 0px 0px 0.5px",borderRadius:"20px"}}>
                <Typography fontWeight={"bold"} variant='h6' component={'h6'}>Product Details</Typography>
                
            </Paper>
        </Box>
    </>
  )
}

export default CreateProduct