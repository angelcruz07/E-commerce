import MarcasCard from '../components/MarcasCard'
import ProductTop from '../components/ProductTop'

async function getTopMarcas() {
	const res = await fetch('http://localhost:4000/marcas?destacado=1', {
		next: { revalidate: 86400 }
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

//End Point Productos
async function getMarcas() {
	const res = await fetch('http://localhost:4000/marcas')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

const Marcas = async () => {
	const marcas = await getMarcas()
	const productsTop = await getTopMarcas()

	return (
		<main className='contPrincipal'>
			<div className='container mt-5 mb-5'>
				<h2>Mas Productos {marcas.length}</h2>
				<div className='grid'>
					<div className='row mt-3'>
						<div className='col-8'>
							{/*DESTACADOS TARJETAS*/}
							<div className='d-flex p-2 flex-wrap justify-content-between'>
								{marcas.map((marca) => (
									<MarcasCard
										key={marca.id}
										img={marca.img}
										marca={marca.marca}
										descripcion={marca.descripcion}
										id={marca.id}
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
											modelo={productTop.marca}
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
