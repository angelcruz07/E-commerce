'use client'
import Link from 'next/link'
import Dropdown from 'react-bootstrap/Dropdown'

const DropDown = () => {
	return (
		<div className='my-2 my-sm-0'>
			<Dropdown>
				<Dropdown.Toggle variant='success' id='dropdown-basic'>
					Más sobre
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>
						<Link href='/scooters'>Scooters</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link href='/cascos'>Cascos</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link href='/accesorios'>Accesorios</Link>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	)
}

export default DropDown
