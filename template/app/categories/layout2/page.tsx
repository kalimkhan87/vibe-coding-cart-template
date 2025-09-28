"use client";
import { products } from '../../../data/products'
import ProductCard from '../../../components/ProductCard'
import { useState } from 'react'
import { useCart } from '../../../components/CartContext'

export default function CatL2(){
  const { addToCart } = useCart();
  const [sort,setSort] = useState('none');
  const sorted = [...products].sort((a,b)=> sort==='price-asc'? parseFloat(a.price)-parseFloat(b.price) : sort==='price-desc'? parseFloat(b.price)-parseFloat(a.price) : 0);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">All Products</h2>
        <select value={sort} onChange={e=>setSort(e.target.value)} className="p-2 border rounded">
          <option value="none">Sort</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sorted.map(p=> <ProductCard key={p.id} product={p} onAdd={(pr)=>addToCart({id:pr.id,title:pr.title,price:pr.price,img:pr.img})} />)}
      </div>
    </div>
  )
}
