import { Skeleton, Stack } from '@mui/material'
import React from 'react'

export const LoadingImageSkeleton:React.FC = () => {
  return <Skeleton variant="rounded" width={"100%"} height={"100%"}/>
}

export const ProductLoadingSkeleton:React.FC = ()=>{
  return <Stack>
    <Skeleton variant="rounded" width={"100%"} height={"100%"}/>
  </Stack>
}


