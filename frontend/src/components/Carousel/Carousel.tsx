import { Key } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'
import Carousel from "react-material-ui-carousel"
import { carouselData } from '../../data/DummyData'
import CarouselComponent from './CarouselComponent'

const CarouselSlide = () => {
  
  return (
      <Carousel sx={{width:"50%",minHeight:"100%"}} indicators={false} animation="slide" navButtonsAlwaysInvisible>
        {
          carouselData.map((item)=>(
            <CarouselComponent key={`${item.id}`} items={item}/>
          ))
        }
      </Carousel>
   
  )
}

export default CarouselSlide;