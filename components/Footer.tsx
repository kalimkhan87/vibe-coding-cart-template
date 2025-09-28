"use client";
export default function Footer(){
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img src="/icons/logo.svg" alt="KidsSport" className="w-40"/>
          <p className="text-sm mt-2">KidsSport — Your trusted partner for kids' bikes and scooters. We provide safe, fun, and high-quality sports equipment for children of all ages.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/categories" className="hover:text-blue-600">Categories</a></li>
            <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            <li><a href="/cart" className="hover:text-blue-600">Shopping Cart</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Connect With Us</h4>
          <div className="flex gap-3 mt-2 text-sm">
            <a href="#" className="hover:text-blue-600">Facebook</a>
            <a href="#" className="hover:text-blue-600">Instagram</a>
            <a href="#" className="hover:text-blue-600">Twitter</a>
          </div>
          <div className="mt-4">
            <h5 className="font-semibold text-sm">Newsletter</h5>
            <p className="text-xs text-gray-600 mt-1">Get updates on new products and special offers!</p>
            <div className="flex mt-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-3 py-1 text-xs border rounded-l"
              />
              <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded-r hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-4 text-sm">© {new Date().getFullYear()} KidsSport. All rights reserved.</div>
    </footer>
  );
}
