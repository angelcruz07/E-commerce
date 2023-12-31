'use client'

import Dropdown from 'react-bootstrap/Dropdown'

const DropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        Más sobre
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href='#/action-1'>Scooters</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Cascos</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Accesorios</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown
