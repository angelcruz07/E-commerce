export async function getProduct(id) {
	const res = await fetch(
		'https://json-sever-eccomerce.vercel.app/products?id=' + id,
		{
			cache: 'no-store'
		}
	)

	if (!res.ok) {
		throw new Error('Failded to fetch data')
	}
	return res.json()
}
