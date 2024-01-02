import Link from 'next/link'
import HouseFillClient from '@/app/components/client/HouseFillClient'

async function getProduct(id) {
	const res = await fetch('http://localhost:4000/marcas?id=' + id, {
		cache: 'no-store'
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const productDetail = async ({ params }) => {
	const data = await getProduct(params.id)
	const marca = data[0]

	//Stock
	var colorStock = '#3E820D'
	var bgColorStock = '#EEFBD0'
	if (marca.stock == 0) {
		colorStock = '#FFFFFF'
		bgColorStock = '#D50000'
	} else if (marca.stock > 0 && marca.stock < 10) {
		colorStock = '#F57F17'
		bgColorStock = '#FDD835'
	}

	return (
		<div className='container  mt-5'>
			<nav ariaLabel='breadcrumb ' className='breadcrumb-top'>
				<ol className='breadcrumb'>
					<li className='breadcrumb-item'>
						<Link href='/'>
							<HouseFillClient />
						</Link>
					</li>
					<li className='breadcrumb-item'>
						<Link href='/marcas'>Productos</Link>
					</li>
					<li className='breadcrumb-item active' ariaCurrent='page'>
						{marca.marca}
					</li>
				</ol>
			</nav>

			<div className='grid'>
				<div className='row'>
					<div className='col-6'>
						<img src={'/img/' + marca.img} className='img-fluid' alt='' />
					</div>
					<div className='col-6'>
						<p className='fs-6 text-body-secondary'>Referencia: {marca.id}</p>
						<p className='fs-2 fw-medium' style={{ textAlign: 'justify' }}>
							{marca.descripcion}
						</p>
						<p
							className='fs-5 fw-bold mt-5'
							style={{
								color: colorStock,
								backgroundColor: bgColorStock,
								width: 200
							}}>
							{' '}
							En Stock, {marca.stock}
						</p>
						<p className='fs-2 fw-bold mt-5' style={{ color: '#BE004F' }}>
							{' '}
							{marca.precio} € <span>IVA incluido</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default productDetail
