"use client";
import { products } from '../../../data/products'
import ProductCard from '../../../components/ProductCard'
import { useState } from 'react'
import { useCart } from '../../../components/CartContext'

export default function CatL1(){
  const { addToCart } = useCart();
  const cats = Array.from(new Set(products.map(p=>p.category)));
  const [selected, setSelected] = useState<string | null>(null);
  const filtered = selected ? products.filter(p=>p.category===selected) : products;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      <aside className="md:col-span-1 border p-4 rounded bg-white">
        <h3 className="font-semibold mb-2">Filters</h3>
        <div className="space-y-2">
          <div><strong>Category</strong></div>
          {cats.map(c=> <div key={c}><label className="text-sm"><input type="radio" name="cat" onChange={()=>setSelected(c)} /> <span className="ml-2">{c}</span></label></div>)}
          <div className="mt-2"><button className="px-3 py-1 rounded border" onClick={()=>setSelected(null)}>Clear</button></div>
        </div>
      </aside>
      <main className="md:col-span-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map(p=> <ProductCard key={p.id} product={p} onAdd={(pr)=>addToCart({id:pr.id,title:pr.title,price:pr.price,img:pr.img})} />)}
        </div>
      </main>
    </div>
  )
}
