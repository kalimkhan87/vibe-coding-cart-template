"use client";
export default function Footer(){
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <img src="/icons/logo.svg" alt="logo" className="w-40"/>
          <p className="text-sm mt-2">ShopWave — modern online store.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>Home</li>
            <li>Categories</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Follow</h4>
          <div className="flex gap-3 mt-2 text-sm">
            <a href="#">Facebook</a><a href="#">Instagram</a><a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 text-center py-4 text-sm">© {new Date().year || new Date().getFullYear()} ShopWave</div>
    </footer>
  );
}
