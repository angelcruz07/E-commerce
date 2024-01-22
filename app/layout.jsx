import ThemeProviderClient from './provider/ThemeProviderClient'
import Navbar from './components/Navbar'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Eccomerce ShoopA',
	description: 'next js'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<ThemeProviderClient>
					<Navbar />
					{children}
				</ThemeProviderClient>
				<script src='https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js'></script>
			</body>
		</html>
	)
}
