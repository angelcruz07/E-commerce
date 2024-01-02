import ProductCard from './ProductCard'
import Categorias from './Categorias'

async function getProducts() {
	const res = await fetch('http://localhost:4000/otrosProductos?destacado=1', {
		next: {
			revalidate: 86400
		}
	})
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}

const ProductGallery = async () => {
	const marcas = await getProducts()

	return (
		<>
			<h2 className='text-center m-3'>
				Productos recomendados {marcas.length}
			</h2>
			<div className='grid m-5'>
				<div className='row mt-3'>
					<div className='col-8'>
						{/*DESTACADOS TARJETAS*/}
						<div className='d-flex p-2 flex-wrap justify-content-between'>
							{marcas.map((marca) => (
								<ProductCard
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
								<h4 className='text-center' data-bs-theme=''>Categorias</h4>
							</div>
							<ul className='list-group list-group-flush'>
							<Categorias categoria="Tenis" href="/tenis" txt="Ir a ver"/>
							<Categorias categoria="Ropa" href="/tenis" txt="Ir a ver"/>
							<Categorias categoria="Accesorios" href="/tenis" txt="Ir a ver"/>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProductGallery