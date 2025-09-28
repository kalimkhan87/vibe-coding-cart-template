"use client";
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../data/products';
import { themeColors } from '../components/theme';
import { useCart } from '@/components/CartContext';

export default function HomePage() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome to KidsSport</h1>
          <p className="text-xl mb-8">The best bikes and scooters for your little adventurers!</p>
          <div className="flex gap-4 justify-center">
            <Link href="/categories" className={`px-8 py-3 rounded-lg text-lg font-semibold ${themeColors.primary}`}>
              Shop Now
            </Link>
            <Link href="/about" className={`px-8 py-3 rounded-lg text-lg font-semibold ${themeColors.light}`}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={product.img} 
                  alt={product.title} 
                  width={400} 
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-2">{product.desc}</p>
                  <p className="text-lg font-bold text-blue-600 mb-4">{product.price}</p>
                  <p className="text-sm text-gray-500 mb-4">Age: {product.ageRange}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => addToCart(product)}
                      className={`px-4 py-2 rounded ${themeColors.primary}`}
                    >
                      Add to Cart
                    </button>
                    <Link 
                      href={`/product/${product.id}`}
                      className={`px-4 py-2 rounded border ${themeColors.light}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/categories?category=Bicycles" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow">
                <Image 
                  src="https://picsum.photos/600/400/?bicycle,kids" 
                  alt="Kids Bicycles" 
                  width={600} 
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Kids Bicycles</h3>
                  <p className="text-gray-600">Perfect bikes for every age and skill level</p>
                </div>
              </div>
            </Link>
            <Link href="/categories?category=Scooters" className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow">
                <Image 
                  src="https://picsum.photos/600/400/?scooter,kids" 
                  alt="Kids Scooters" 
                  width={600} 
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Kids Scooters</h3>
                  <p className="text-gray-600">Fun and safe scooters for all ages</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose KidsSport?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">All our products meet the highest safety standards</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free shipping on all orders over $100</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional assembly and maintenance support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
