import CarouselClient from './components/client/CarouselClient'
import ProductGallery from './components/ProductGallery'
import { StoreProvider } from '../utils/Store'

export default function Home() {
	return (
		<main className='contPrincipal'>
			<CarouselClient />
			<ProductGallery />
		</main>
	)
}
