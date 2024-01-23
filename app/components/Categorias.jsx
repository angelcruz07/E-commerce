import Link from 'next/link'

const Categorias = ({ categoria, href, txt }) => {
	return (
		<li className='list-group-item'>
			{categoria}
			<span className='float-end'>
				<Link className='btn btn-primary border-0' href={href}>
					{txt}
				</Link>
			</span>
		</li>
	)
}
export default Categorias
