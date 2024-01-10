'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import AddCart from '../AddCart'

function ProductCard({ img, modelo, txt, id, route }) {
	const cart = useState(false)
	const pathName = usePathname()

	return (
		<div className='card mb-2' style={{ width: '15rem' }}>
			<img
				src={`${pathName === route ? '/img/' : 'https:'}` + img}
				className='card-img-top p-4'
				alt={modelo}
			/>
			<div className='card-body'>
				<h5 className='card-title'>{modelo}</h5>
				<p className='card-text text-truncate'>{txt}</p>
				<Link
					href={route === '/' ? '/marcas/' + id : route + '/' + id}
					className='btn btn-primary'>
					Más Info
				</Link>
				<button></button>
			</div>
		</div>
	)
}

export default ProductCard
