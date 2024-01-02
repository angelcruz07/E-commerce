import CarouselClient from './components/client/CarouselClient'
import ProductGallery from './components/ProductGallery'

export default function Home() {
	return (
		<main className='contPrincipal'>
			<CarouselClient />
			<ProductGallery />
		</main>
	)
}
