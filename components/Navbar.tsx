"use client";
import Link from 'next/link';
import Image from 'next/image';
import { themeColors } from './theme';
import { useCart } from './CartContext';

export default function Navbar(){
  const { cart } = useCart();
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/icons/logo.svg" alt="KidsSport" width={140} height={32} />
        </div>
        <ul className="hidden md:flex items-center gap-6 text-base">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/categories">Bicycles</Link></li>
          <li><Link href="/categories">Scooters</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/login" className={"px-3 py-1 rounded text-sm " + themeColors.light}>Login</Link>
          <Link href="/signup" className={"px-3 py-1 rounded text-sm " + themeColors.primary}>Sign Up</Link>
          <Link href="/cart" className="relative ml-2">
            <span aria-hidden className="inline-block px-3 py-1 rounded-full bg-gray-200 text-sm">{cart.reduce((s,i)=>s+i.quantity,0)}</span>
            <span className="ml-2">Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
