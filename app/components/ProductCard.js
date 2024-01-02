import Link from 'next/link'

const ProductCard = ({ img, descripcion, marca, id }) => {
	return (
		<div className='card mb-2' style={{ width: '15rem' }}>
			<img src={'./img/' + img} className='card-img-top p-4' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>{marca}</h5>
				<p className='card-text text-truncate'>{descripcion}</p>
				<Link href={'#' + id} className='btn btn-primary border-0'>
					Más Info
				</Link>
			</div>
		</div>
	)
}
export default ProductCard
