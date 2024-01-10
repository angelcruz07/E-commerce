import Link from 'next/link'
import LinkClient from './client/LinkClient'
import DropDown from './client/DropDown'
import SwitchClient from './client/SwitchClient'
import ShoppingCart from './client/ShoppingCart'

const Navbar = () => {
	return (
		<nav className='navbar fixed-top navbar-expand-lg' data-bs-theme=''>
			<div className='container-fluid'>
				<Link className='navbar-brand d-flex  align-items-center' href='/'>
					<span className='fs-2  fw-bold'>AC-DEV</span>
				</Link>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<LinkClient className='nav-link' route='/' texto='Home' />
						</li>
						<li className='nav-item'>
							<LinkClient
								className='nav-link'
								route='/scooters'
								texto='Scooters'
							/>
						</li>
						<li className='nav-item'>
							<LinkClient
								className='nav-link'
								route='/importacion'
								texto='Importacion'
							/>
						</li>
						<li className='nav-item'>
							<LinkClient className='nav-link' route='/marcas' texto='Marcas' />
						</li>
					</ul>
				</div>
				<button
					className='navbar-toggler p-0 m-0'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='d-flex align-items-center'>
					<DropDown />
					<SwitchClient />
					<LinkClient
						route='/shoppingcart'
						texto={<ShoppingCart></ShoppingCart>}
					/>
				</div>
			</div>
		</nav>
	)
}
export default Navbar
