"use client";
type Product = {
  id: string;
  title: string;
  price: string;
  img: string;
  desc?: string;
}
export default function ProductCard({product, onAdd}:{product:Product, onAdd:(p:Product)=>void}){
  return (
    <div className="border rounded overflow-hidden shadow-sm bg-white">
      <img src={product.img} alt={product.title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-600">{product.price}</p>
        <div className="mt-3 flex gap-2">
          <button onClick={()=>onAdd(product)} className="px-3 py-1 rounded bg-blue-600 text-white">Add</button>
          <button className="px-3 py-1 rounded border">View</button>
        </div>
      </div>
    </div>
  );
}
