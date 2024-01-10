import ThemeProviderClient from './provider/ThemeProviderClient'
import Navbar from './components/Navbar'
import { StoreProvider } from '../utils/Store'
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
				<StoreProvider>
					<ThemeProviderClient>
						{/* BARRA NAVEGACION */}
						<Navbar />
						{children}
					</ThemeProviderClient>
				</StoreProvider>
				<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js'></script>
			</body>
		</html>
	)
}
