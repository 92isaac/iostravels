import React from 'react'
import Carousel from 'react-grid-carousel'
import { tripsData } from '../asset/database'
import CarOsel from './CarOsel'

const Gallery = () => {
  return (
    <Carousel cols={3} rows={1} gap={10} loop={true} autoplay= {1000}>
                {tripsData.map((itr)=>( <Carousel.Item>
                <CarOsel 
          key={itr.slideImage}
          slideImage={itr.slideImage}
          location = {itr.location}
          date = {itr.date}
          /></Carousel.Item>))}
          
  </Carousel>
  )
}

export default Gallery