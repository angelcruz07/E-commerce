import SearchNav from '../components/client/SearchNav'
import ProductCard from '../components/ProductCard'
import ProductTop from '../components/ProductTop'

async function getTopProducts() {
	const res = await fetch(process.env.DB_HOST + 'products?destacado=1', {
		next: { revalidate: 86400 }
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

// EndPoint products
async function getProducts(precio) {
	let res
	if (precio) {
		res = await fetch(process.env.DB_HOST + 'products?precio_lte=' + precio)
	}
	// Revalidacion y carga de datos
	else res = await fetch(process.env.DB_HOST + 'products')
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const Scooter = async ({ searchParams }) => {
	const products = await getProducts(searchParams.precio)
	const productsTop = await getTopProducts()

	return (
		<>
			<main className='contPrincipal'>
				<SearchNav />
				<div className='container mt-5 mb-5'>
					<h2 className='text-center'>Scooters ({products.length})</h2>
					<div className='grid'>
						<div className='row mt-3'>
							<div className='col-8'>
								{/*DESTACADOS TARJETAS*/}
								<div className='d-flex p-2 flex-wrap justify-content-between'>
									{products.map((product) => (
										<ProductCard
											key={product.id}
											route='/scooters'
											img={product.img}
											modelo={product.modelo}
											txt={product.txt}
											id={product.id}
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
										{productsTop.map((productTop) => (
											<ProductTop
												key={productTop.id}
												modelo={productTop.modelo}
												precio={productTop.precio}
											/>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
export default Scooter
