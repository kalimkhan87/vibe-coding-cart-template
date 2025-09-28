"use client";
import ProductCard from '../../../components/ProductCard'
import Testimonial from '../../../components/Testimonial'
import { products } from '../../../data/products'
import { useCart } from '../../../components/CartContext'

export default function HomeL1(){
  const { addToCart } = useCart();
  const trending = products.slice(0,6);
  return (
    <div>
      <section className="h-80 flex items-center justify-center bg-cover" style={{backgroundImage:"url('https://picsum.photos/1600/900?shopping')"}}>
        <div className="bg-black/40 p-6 rounded text-center">
          <h1 className="text-4xl font-bold text-white">Discover trending products</h1>
          <p className="text-white/80 mt-2">New arrivals & top picks</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {trending.map(p=> <ProductCard key={p.id} product={p} onAdd={(pr)=>addToCart({id:pr.id,title:pr.title,price:pr.price,img:pr.img})} />)}
        </div>
      </section>

      <Testimonial />
    </div>
  )
}
