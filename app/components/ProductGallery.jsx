import ProductCard from './ProductCard'
import Categorias from './Categorias'

async function getProducts() {
	const res = await fetch(process.env.DB_HOST + 'otrosProductos?destacado=1', {
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
	const products = await getProducts()

	return (
		<>
			<h2 className='text-center m-3'>
				Productos recomendados {products.length}
			</h2>
			<div className='grid m-5'>
				<div className='row mt-3'>
					<div className='col-md-4'>
						{/* DESTACADOS APILADOS */}
						<div className='card'>
							<div className='card-header'>
								<h4 className='text-center' data-bs-theme=''>
									Categorias
								</h4>
							</div>
							<ul className='list-group list-group-flush'>
								<Categorias categoria='Tenis' href='/marcas' txt='Ir a ver' />
								<Categorias categoria='Ropa' href='/marcas' txt='Ir a ver' />
								<Categorias
									categoria='Accesorios'
									href='/importacion'
									txt='Ir a ver'
								/>
							</ul>
						</div>
					</div>
					<div className='col-md-8'>
						{/* DESTACADOS TARJETAS */}
						<div className='d-flex p-2 flex-wrap justify-content-around'>
							{products.map((product) => (
								<ProductCard
									key={product.id}
									img={product.img}
									modelo={product.modelo}
									txt={product.descripcion}
									id={product.id}
									route='/'
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProductGallery
