import 'bootstrap/dist/css/bootstrap.css'
import MarcasCard from '../components/MarcasCard'

async function getMarcas() {
	const res = await fetch('http://localhost:4000/marcas')

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

const Marcas = async () => {
	const marcas = await getMarcas()

	return (
		<main className='contPrincipal'>
			<div className='container mt-5 mb-5'>
				<h2>Marcas </h2>
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
export default Marcas
