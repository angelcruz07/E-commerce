import Link from 'next/link'
import HouseFillClient from '@/app/components/client/HouseFillClient'

async function getProduct(id) {
	const res = await fetch(process.env.DB_HOST + 'otrosProductos?id=' + id, {
		cache: 'no-store'
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const productDetail = async ({ params }) => {
	const data = await getProduct(params.id)
	const product = data[0]
	//Stock
	var colorStock = '#3E820D'
	var bgColorStock = '#EEFBD0'
	if (product.stock == 0) {
		colorStock = '#FFFFFF'
		bgColorStock = '#D50000'
	} else if (product.stock > 0 && product.stock < 10) {
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
						{product.marca}
					</li>
				</ol>
			</nav>

			<div className='grid'>
				<div className='row'>
					<div className='col-6'>
						<img src={'/img/' + product.img} className='img-fluid' alt='' />
					</div>
					<div className='col-6'>
						<p className='fs-6 text-body-secondary'>Referencia: {product.id}</p>
						<p className='fs-2 fw-medium' style={{ textAlign: 'justify' }}>
							{product.descripcion}
						</p>
						<p
							className='fs-5 fw-bold mt-5'
							style={{
								color: colorStock,
								backgroundColor: bgColorStock,
								width: 200
							}}>
							{' '}
							En Stock, {product.stock}
						</p>
						<p className='fs-2 fw-bold mt-5' style={{ color: '#BE004F' }}>
							{' '}
							{product.precio} € <span>IVA incluido</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default productDetail
