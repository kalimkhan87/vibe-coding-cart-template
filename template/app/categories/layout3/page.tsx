"use client";
import { products } from '../../../data/products'
import { useCart } from '../../../components/CartContext'

export default function CatL3(){
  const { addToCart } = useCart();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
      {products.map(p=>(
        <div key={p.id} className="p-4 border rounded flex gap-4 items-center bg-white">
          <img src={p.img} alt={p.title} className="w-40 h-24 object-cover rounded"/>
          <div className="flex-1">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.desc}</p>
          </div>
          <div className="text-right">
            <div className="font-bold">{p.price}</div>
            <button onClick={()=>addToCart({id:p.id,title:p.title,price:p.price,img:p.img})} className="mt-2 px-3 py-1 rounded bg-blue-600 text-white">Add</button>
          </div>
        </div>
      ))}
    </div>
  )
}
