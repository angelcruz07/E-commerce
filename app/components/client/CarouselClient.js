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
					src='/img/patinete01_1080.jpg'
					alt='Picture of the author'
				/>
				<Carousel.Caption>
					<h3>E-commerce</h3>
					<p>Encuentra los mejores productos.</p>
				</Carousel.Caption>
			</Carousel.Item>
			{/* Segundo slide */}
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='/img/patinete02_1080.jpg'
					alt='Picture of the author'
				/>
				<Carousel.Caption>
					<h3>Envios gratis</h3>
					<p>AQprovecha las ofertas en envios de fin de año</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default CarouselClient
