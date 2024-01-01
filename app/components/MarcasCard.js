import Link from 'next/link'

const MarcasCard = ({ img, marca, descripcion, id }) => {
	return (
		<div className='card mb-2' style={{ width: '15rem' }}>
			<img src={'./img/' + img} className='card-img-top p-4' alt={marca} />
			<div className='card-body'>
				<h5 className='card-title'>{marca}</h5>
				<p className='card-text text-truncate'>{descripcion}</p>
				<Link href={'./marcas/'+ id} className='btn btn-primary'>
					Más Info
				</Link>
			</div>
		</div>
	)
}
export default MarcasCard
