const ScooterTop = ({ modelo, precio }) => {
	return (
		<li className='list-group-item'>
			{modelo}
			<span span className='badge text-bg-dark float-end'>
				{precio}
			</span>
		</li>
	)
}
export default ScooterTop
