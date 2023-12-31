'use client'

import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselClient = () => {
  return (
    <Carousel>
      {/* Primer slide */}
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='./img/patinete01_1080.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>E-Scooter</h3>
          <p>Desplazate de un forma diferente.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Segundo slide */}
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='./img/patinete02_1080.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>Scooter segunda mano</h3>
          <p>Conectamos directamente al vendedor y comprado</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselClient
