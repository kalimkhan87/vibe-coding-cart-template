"use client";
import ProductCard from '../../../components/ProductCard'
import ProductCarousel from '../../../components/ProductCarousel'
import { products } from '../../../data/products'
import { useCart } from '../../../components/CartContext'

export default function HomeL2(){
  const { addToCart } = useCart();
  const featured = products.slice(3,9);
  return (
    <div>
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <ProductCarousel images={[products[0].img, products[1].img, products[2].img]} />
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-bold">New Products</h3>
              <p className="text-sm text-gray-600 mt-2">Check latest arrivals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map(p=> <ProductCard key={p.id} product={p} onAdd={(pr)=>addToCart({id:pr.id,title:pr.title,price:pr.price,img:pr.img})} />)}
        </div>
      </section>
    </div>
  )
}
