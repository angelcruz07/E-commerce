import ProductCard from '../components/ProductCard'
import CardImport from '../components/client/CardImport'

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

async function getProducts() {
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
				<h2>Productos de importacion ({products.length}) </h2>
				<div className='grid'>
					<div className='row mt-3'>
						<div className=' contend-center'>
							{/*DESTACADOS TARJETAS*/}
							<div className='d-flex p-2 flex-wrap justify-content-between'>
								{products.map((product) => (
									<ProductCard
										key={product.item.itemId}
										img={product.item.image}
										modelo={product.item.title.split(' ').slice(0, 3).join(' ')}
										txt={product.item.title}
										id={product.item.itemId}
										link='/importacion'
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Importacion
