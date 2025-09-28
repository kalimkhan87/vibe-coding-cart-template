import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CartProvider } from '../components/CartContext'

export const metadata = {
  title: 'KidsSport - Kids Bikes & Scooters',
  description: 'Premium kids bikes and scooters for all ages. Safe, fun, and high-quality sports equipment for your little adventurers!'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body className="font-sans">
        <CartProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
