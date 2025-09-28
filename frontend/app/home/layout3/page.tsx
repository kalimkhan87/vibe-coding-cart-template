"use client";
import ProductCard from '../../../components/ProductCard'
import { products } from '../../../data/products'
import { useCart } from '../../../components/CartContext'

export default function HomeL3(){
  const { addToCart } = useCart();
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <div className="col-span-2 bg-cover h-64 rounded" style={{backgroundImage:"url('https://picsum.photos/1200/600?store')"}}></div>
        <div className="p-4 border rounded">
          <h3 className="font-bold">Spotlight</h3>
          <p className="text-sm mt-2">Curated picks for you.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Shop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p=> <ProductCard key={p.id} product={p} onAdd={(pr)=>addToCart({id:pr.id,title:pr.title,price:pr.price,img:pr.img})} />)}
        </div>
      </section>
    </div>
  )
}
