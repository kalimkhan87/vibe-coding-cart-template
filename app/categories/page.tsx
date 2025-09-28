"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products, categories } from '../../data/products';
import { themeColors } from '../../components/theme';
import { useCart } from '../../components/CartContext';

export default function CategoriesPage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredProducts = products.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'name':
      default:
        return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Shop Kids Sports</h1>
        <p className="text-lg text-gray-600">Find the perfect bike or scooter for your child</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-lg ${
              selectedCategory === 'All' ? themeColors.primary : themeColors.secondary
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-lg ${
                selectedCategory === category.name ? themeColors.primary : themeColors.secondary
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div className="mb-8 flex justify-between items-center">
        <p className="text-gray-600">{sortedProducts.length} products found</p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="name">Sort by Name</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <Image 
              src={product.img} 
              alt={product.title} 
              width={400} 
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="mb-2">
                <span className={`px-2 py-1 rounded text-xs ${themeColors.accent}`}>
                  {product.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.desc}</p>
              <p className="text-sm text-gray-500 mb-2">Age: {product.ageRange}</p>
              <p className="text-xl font-bold text-blue-600 mb-4">{product.price}</p>
              <div className="flex gap-2">
                <button 
                  onClick={() => addToCart(product)}
                  className={`px-4 py-2 rounded text-sm ${themeColors.primary}`}
                >
                  Add to Cart
                </button>
                <Link 
                  href={`/product/${product.id}`}
                  className={`px-4 py-2 rounded text-sm border ${themeColors.light}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
