import Link from 'next/link'
import LinkClient from './components/LinkClient.js'
import DropDown from './components/DropDown.js'
// import ThemeProviderClient from "./provider/ThemeProviderClient";
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

// eslint-disable-next-line
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Shoop',
	description: 'next js'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				{/* BARRA NAVEGACION */}
				<nav
					className='navbar fixed-top navbar-expand-lg bg-body-secondary'
					data-bs-theme=''>
					<div className='container-fluid'>
						<Link className='navbar-brand d-flex  align-items-center' href='/'>
							<img
								src='/img/logo.png'
								alt='Logo'
								height={35}
								className='d-inline-block align-text-top'
							/>
							<span className='fs-2 ps-3 fw-bold'>ElecScoot</span>
						</Link>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNav'
							aria-controls='navbarNav'
							aria-expanded='false'
							aria-label='Toggle navigation'>
							<span className='navbar-toggler-icon' />
						</button>
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
									<LinkClient
										className='nav-link'
										route='/marcas'
										texto='Marcas'
									/>
								</li>
								<li className='nav-item'>
									<DropDown />
								</li>
							</ul>
						</div>
						<div className='form-check form-switch'>
							<input
								className='form-check-input'
								type='checkbox'
								role='switch'
								id='flexSwitchCheckDefault'
							/>
							<label
								className='form-check-label'
								htmlFor='flexSwitchCheckDefault'>
								Tema oscuro
							</label>
						</div>
					</div>
				</nav>
				{children}
				{/* </ThemeProviderClient> */}
			</body>
		</html>
	)
}
