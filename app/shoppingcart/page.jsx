'use client'
import ItemCart from '../components/client/ItemCart'
import LinkClient from '../components/client/LinkClient'
import Checkout from '../components/Checkout'

const ShopCart = () => {
	return (
		<main className='contPrincipal'>
			<section className='h-100 h-custom'>
				<div className='container py-5 h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div className='col'>
							<div className='card'>
								<div className='card-body p-4'>
									<div className='row'>
										<div className='col-lg-7'>
											<h5 className='mb-3'>
												<LinkClient
													route='/'
													texto='Continuar comprando'
													className='text-body'
												/>
											</h5>
											<h6 className='mb-0'>
												Tu tienes 4 productos en tu carrito
											</h6>
											<hr />
											<div className='d-flex justify-content-between align-items-center mb-4'></div>
											<ItemCart />
											<ItemCart />
										</div>

										{/* Details */}
										<div className='col-lg-5'>
											<Checkout />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
export default ShopCart
