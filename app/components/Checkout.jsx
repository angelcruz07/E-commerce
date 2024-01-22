import PriceClient from './client/PriceClient'

const Checkout = () => {
	return (
		<div className='card  rounded-3  text-bg-secondary'>
			<div className='card-body'>
				<h5 className='mb-0 text-center'>Usuario del carrito</h5>
				<div class='card-body'>
					<p>
						<strong>Metodo de pago</strong>
					</p>
					<img
						class='me-2'
						width='45px'
						src='https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg'
						alt='Visa'
					/>
					<img
						class='me-2'
						width='45px'
						src='https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg'
						alt='American Express'
					/>
					<img
						class='me-2'
						width='45px'
						src='https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg'
						alt='Mastercard'
					/>
					<img
						class='me-2'
						width='45px'
						src='https://1000marcas.net/wp-content/uploads/2019/12/PayPal-Logo-2007.png'
						alt='PayPal acceptance mark'
					/>
				</div>

				<form className='mt-4'>
					<div className='form-outline form-white mb-4'>
						<input
							type='text'
							id='typeName'
							className='form-control form-control-lg'
							siez={17}
							placeholder="Cardholder's Name"
						/>
						<label className='form-label' htmlFor='typeName'>
							Nombre
						</label>
					</div>
					<div className='form-outline form-white mb-4'>
						<input
							type='text'
							id='typeText'
							className='form-control form-control-lg'
							siez={17}
							placeholder='1234 5678 9012 3457'
							minLength={19}
							maxLength={19}
						/>
						<label className='form-label' htmlFor='typeText'>
							Numero de targeta
						</label>
					</div>
					<div className='row mb-4'>
						<div className='col-md-6'>
							<div className='form-outline form-white'>
								<input
									type='text'
									id='typeExp'
									className='form-control form-control-lg'
									placeholder='MM/YYYY'
									size={7}
									minLength={7}
									maxLength={7}
								/>
								<label className='form-label' htmlFor='typeExp'>
									Vencimiento
								</label>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='form-outline form-white'>
								<input
									type='password'
									id='typeText'
									className='form-control form-control-lg'
									placeholder='●●●'
									size={1}
									minLength={3}
									maxLength={3}
								/>
								<label className='form-label' htmlFor='typeText'>
									CVV
								</label>
							</div>
						</div>
					</div>
				</form>
				<hr className='my-4' />
				<PriceClient />
				<PriceClient />
				<PriceClient />
				<button type='button' className='btn btn-success btn-block btn-lg'>
					Comprar
				</button>
			</div>
		</div>
	)
}
export default Checkout
