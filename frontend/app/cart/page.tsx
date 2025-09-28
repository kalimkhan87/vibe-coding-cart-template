"use client";
import { useCart } from '../../components/CartContext'
import ProductCarousel from '../../components/ProductCarousel'

export default function CartPage(){
  const { cart, decrementItem, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((s,i)=> s + parseFloat(i.price) * i.quantity, 0);
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">My Cart</h1>
      {cart.length===0 ? <div className="text-sm text-gray-600">Cart is empty</div> : (
        <div className="space-y-4">
          {cart.map(it=>(
            <div key={it.id} className="flex gap-4 border p-4 rounded items-center bg-white">
              <div className="w-48"><ProductCarousel images={[it.img]} /></div>
              <div className="flex-1">
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-gray-600">{it.price}</div>
                <div className="text-sm">Quantity: {it.quantity}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={()=>decrementItem(it.id)} className="px-3 py-1 border rounded">-</button>
                <button onClick={()=>removeFromCart(it.id)} className="px-3 py-1 border rounded">Remove</button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <div className="font-bold">Total: ₹{total.toFixed(2)}</div>
            <div className="flex gap-2 mt-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={()=>alert('Proceed to payment...')}>Proceed to Pay</button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded" onClick={()=>clearCart()}>Clear Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
