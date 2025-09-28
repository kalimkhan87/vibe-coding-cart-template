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
          <Image src="/icons/logo.svg" alt="ShopWave" width={140} height={32} />
        </div>
        <ul className="hidden md:flex items-center gap-6 text-base">
          <li><Link href="/home/layout1">Home L1</Link></li>
          <li><Link href="/home/layout2">Home L2</Link></li>
          <li><Link href="/home/layout3">Home L3</Link></li>
          <li><Link href="/categories/layout1">Categories L1</Link></li>
          <li><Link href="/categories/layout2">Categories L2</Link></li>
          <li><Link href="/categories/layout3">Categories L3</Link></li>
          <li><Link href="/about">About</Link></li>
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
