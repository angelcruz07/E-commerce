const CartDetails = ({ cart }) => {
	console.log(cart)

	return (
		<div className='cartDetails'>
			<ul>
				{cart.map((x) => (
					<li className='product' key={x.name}>
						<img alt={x.name} src={x.img} width='50px' height='32px' />
						{x.name}
						<span>{x.amount}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CartDetails
