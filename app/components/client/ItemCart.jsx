'use client'

import { Plus, Dash } from 'react-bootstrap-icons'
const ItemCart = () => {
	return (
		<>
			<div className='row mb-4 d-flex justify-content-between align-items-center'>
				<div className='col-md-2 col-lg-2 col-xl-2'>
					<img
						src='/img/foto01.jpg'
						className='img-fluid rounded-3'
						alt='Cotton T-shirt'
					/>
				</div>
				<div className='col-md-3 col-lg-3 col-xl-3'>
					<h6 className='text-muted'>Modelo </h6>
					<h6 className='text-black mb-0'>Scooter negro</h6>
				</div>
				<div className='col-md-3 col-lg-3 col-xl-2 d-flex'>
					<button
						className='btn btn-link px-2'
						onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
						<Dash></Dash>
					</button>
					<input
						id='form1'
						min={0}
						name='quantity'
						defaultValue={1}
						type='number'
						className='form-control form-control-sm'
					/>
					<button
						className='btn btn-link px-2'
						onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
						<Plus></Plus>
					</button>
				</div>
				<div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
					<h6 className='mb-0'>$100</h6>
				</div>
				<div className='col-md-1 col-lg-1 col-xl-1 text-end'>
					<a href='#!' className='text-muted'>
						<i className='fas fa-times' />
					</a>
				</div>
			</div>
			<hr className='my-4' />
		</>
	)
}
export default ItemCart
