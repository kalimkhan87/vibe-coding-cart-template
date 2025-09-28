"use client";
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../../data/products';
import { themeColors } from '../../../components/theme';
import { useCart } from '../../../components/CartContext';

export default function ProductDetailsPage() {
  const params = useParams();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/categories" className={`px-6 py-3 rounded ${themeColors.primary}`}>
          Back to Categories
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm">
          <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li>/</li>
          <li><Link href="/categories" className="text-blue-600 hover:underline">Categories</Link></li>
          <li>/</li>
          <li><Link href={`/categories?category=${product.category}`} className="text-blue-600 hover:underline">{product.category}</Link></li>
          <li>/</li>
          <li className="text-gray-500">{product.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <Image 
            src={product.img} 
            alt={product.title} 
            width={600} 
            height={400}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <span className={`px-3 py-1 rounded text-sm ${themeColors.accent}`}>
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <p className="text-3xl font-bold text-blue-600 mb-6">{product.price}</p>
          
          <p className="text-lg text-gray-600 mb-6">{product.desc}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Age Range</h3>
            <p className="text-gray-600">{product.ageRange}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => addToCart(product)}
              className={`px-8 py-3 rounded-lg text-lg font-semibold ${themeColors.primary}`}
            >
              Add to Cart
            </button>
            <button className={`px-8 py-3 rounded-lg text-lg font-semibold border ${themeColors.light}`}>
              Add to Wishlist
            </button>
          </div>

          {/* Product Details */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Age Range:</span>
                <span>{product.ageRange}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price:</span>
                <span className="font-semibold">{product.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image 
                  src={relatedProduct.img} 
                  alt={relatedProduct.title} 
                  width={400} 
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedProduct.title}</h3>
                  <p className="text-blue-600 font-bold mb-2">{relatedProduct.price}</p>
                  <p className="text-sm text-gray-500 mb-3">Age: {relatedProduct.ageRange}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => addToCart(relatedProduct)}
                      className={`px-3 py-1 rounded text-sm ${themeColors.primary}`}
                    >
                      Add to Cart
                    </button>
                    <Link 
                      href={`/product/${relatedProduct.id}`}
                      className={`px-3 py-1 rounded text-sm border ${themeColors.light}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
