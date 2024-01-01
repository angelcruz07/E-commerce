import ScooterCard from '../components/ScooterCard'
import ProductTop from '../components/ProductTop'

async function getTopProducts() {
	const res = await fetch('http://localhost:4000/products?destacado=1', {
		next: { revalidate: 86400 }
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

// EndPoint products
async function getProducts() {
	// Revalidacion y carga de datos
	const res = await fetch('http://localhost:4000/products')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

const Scooter = async () => {
	const products = await getProducts()
	const productsTop = await getTopProducts()

	console.log(products)

	return (
		<main className='contPrincipal'>
			<div className='container mt-5 mb-5'>
				<h2>Scooters ({products.length}) </h2>
				<div className='grid'>
					<div className='row mt-3'>
						<div className='col-8'>
							{/*DESTACADOS TARJETAS*/}
							<div className='d-flex p-2 flex-wrap justify-content-between'>
								{products.map((product) => (
									<ScooterCard
										key={product.id}
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
	)
}

export default Scooter
