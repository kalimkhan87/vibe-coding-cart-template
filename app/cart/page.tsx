"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../components/CartContext';
import { themeColors } from '../../components/theme';

export default function CartPage() {
  const { cart, decrementItem, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link href="/categories" className={`px-8 py-3 rounded-lg text-lg font-semibold ${themeColors.primary}`}>
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  width={120} 
                  height={120}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => decrementItem(item.id)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button 
                    onClick={() => decrementItem(item.id)}
                    className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <button 
              onClick={clearCart}
              className="text-red-600 hover:underline"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(total * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${(total * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className={`w-full py-3 rounded-lg text-lg font-semibold mb-4 ${themeColors.primary}`}>
              Proceed to Checkout
            </button>
            
            <Link 
              href="/categories" 
              className={`w-full py-3 rounded-lg text-lg font-semibold border text-center block ${themeColors.light}`}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
