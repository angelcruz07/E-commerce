import ProductCard from '../components/ProductCard'

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

async function getProducts(precio) {
	const res = await fetch(url, options)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const Importacion = async () => {
	const productsJSON = await getProducts()
	const products = productsJSON.result.resultList

	return (
		<main className='contPrincipal'>
			<div className='container mb-5'>
				<h2>Scooters ({products.length}) </h2>
				<div className='grid'>
					<div className='row mt-3'>
						<div className='col-8'>
							{/*DESTACADOS TARJETAS*/}
							<div className='d-flex p-2 flex-wrap justify-content-between'>
								{products.map((product) => (
									<ProductCard
										key={product.item.itemId}
										img={product.item.image}
										modelo={product.item.title.split(' ').slice(0, 3).join(' ')}
										txt={product.item.title}
										id={product.item.itemId}
									/>
								))}
							</div>
						</div>
						<div className='col-4'>
							{/*DESTACADOS APILADOS*/}
							<div className='card'>
								<div className='card-header'>
									<h4>Top</h4>
								</div>
								<ul className='list-group list-group-flush'>
									{/* TOP PRODUCTS */}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Importacion
