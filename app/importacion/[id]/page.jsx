import Link from 'next/link'
import HouseFillClient from '@/app/components/client/HouseFillClient'

const url =
	process.env.DB_HOST_RAPIDAPI +
	'item_search?q=iphone&page=1&sort=latest&loc=ES&locale=es_ES&region=ES&currency=EUR'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.KEY_RAPIDAPI,
		'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
	}
}

async function getProduct(id) {
	const res = await fetch(
		'https://aliexpress-datahub.p.rapidapi.com/item_search?q=iphone&page=1&sort=latest&loc=ES&locale=es_ES&region=ES&currency=EUR' +
			id,
		options,
		{
			cache: 'no-store'
		}
	)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const ImportacionDetail = async ({ params }) => {
	const productsJSON = await getProduct(params.id)
	const product = productsJSON.result.resultList[0]

	var colorStock = '#3E820D'
	var bgColorStock = '#EEFBD0'
	if (product.item.wishCount == 0) {
		colorStock = '#FFFFFF'
		bgColorStock = '#D50000'
	} else if (product.item.wishCount > 0 && product.item.wishCount < 10) {
		colorStock = '#F57F17'
		bgColorStock = '#FDD835'
	}

	return (
		<div className='container mt-5'>
			<nav ariaLabel='breadcrumb ' className='breadcrumb-top'>
				<ol className='breadcrumb'>
					<li className='breadcrumb-item'>
						<Link href='/'>
							<HouseFillClient />
						</Link>
					</li>
					<li className='breadcrumb-item'>
						<Link href='/importacion'>Productos</Link>
					</li>
					<li className='breadcrumb-item active' ariaCurrent='page'>
						{product.item.title.split(' ').slice(0, 4).join(' ')}
					</li>
				</ol>
			</nav>

			<div className='grid'>
				<div className='row'>
					<div className='col-6'>
						<img
							src={product.item.image}
							className='img-fluid w-100 h-75'
							alt={product.item.title}
						/>
					</div>
					<div className='col-6'>
						<p className='fs-6 text-body-secondary'>
							Referencia: {product.item.itemId}
						</p>
						<h2 className='text-center text-success '>
							{product.item.title.split(' ').slice(0, 4).join(' ')}
						</h2>
						<p className='fs-4 fw-medium' style={{ textAlign: 'justify' }}>
							{product.item.title}
						</p>
						<p
							className='fs-5 fw-bold mt-5'
							style={{
								color: colorStock,
								backgroundColor: bgColorStock,
								width: 200
							}}>
							{' '}
							En Stock, {product.item.wishCount}
						</p>
						<p className='fs-2 fw-bold mt-5' style={{ color: '#BE004F' }}>
							{' '}
							€ <span>IVA incluido</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ImportacionDetail
