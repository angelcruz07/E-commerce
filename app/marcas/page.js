import ProductCard from '../components/ProductCard'
import ProductTop from '../components/ProductTop'

async function getTopMarcas() {
	const res = await fetch('http://localhost:4000/otrosProductos?destacado=1', {
		next: { revalidate: 86400 }
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

//End Point Productos
async function getMarcas() {
	const res = await fetch('http://localhost:4000/otrosProductos')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const Marcas = async () => {
	const products = await getMarcas()
	const productsTop = await getTopMarcas()

	return (
		<main className='contPrincipal'>
			<div className='container mt-5 mb-5'>
				<h2>Mas Productos {products.length}</h2>
				<div className='grid'>
					<div className='row mt-3'>
						<div className='col-8'>
							{/*DESTACADOS TARJETAS*/}
							<div className='d-flex p-2 flex-wrap justify-content-between'>
								{products.map((product) => (
									<ProductCard
										key={product.id}
										img={product.img}
										modelo={product.modelo}
										txt={product.descripcion}
										id={product.id}
										route='/marcas'
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
export default Marcas
