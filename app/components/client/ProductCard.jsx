import Link from 'next/link'

function ProductCard({ img, modelo, txt, link }) {
	return (
		<div className='card mb-2' style={{ width: '15rem' }}>
			<img src={img} className='card-img-top p-4' alt={modelo} />
			<div className='card-body'>
				<h5 className='card-title'>{modelo}</h5>
				<p className='card-text text-truncate'>{txt}</p>
				<Link href={link} className='btn btn-primary'>
					Más Info
				</Link>
				<button></button>
			</div>
		</div>
	)
}

export default ProductCard
