"use client";
import React, { createContext, useContext, useState } from 'react';

export type CartItem = {
  id: string;
  title: string;
  price: string;
  img: string;
  quantity: number;
}

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem,'quantity'>) => void;
  decrementItem: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({children}:{children:React.ReactNode}){
  const [cart,setCart]=useState<CartItem[]>([]);
  function addToCart(item: Omit<CartItem,'quantity'>){
    setCart(prev=>{
      const ex = prev.find(p=>p.id===item.id);
      if(ex) return prev.map(p=>p.id===item.id?{...p,quantity:p.quantity+1}:p);
      return [...prev,{...item,quantity:1}];
    });
  }
  function decrementItem(id:string){
    setCart(prev=>prev.map(p=>p.id===id?{...p,quantity:p.quantity-1}:p).filter(p=>p.quantity>0));
  }
  function removeFromCart(id:string){
    setCart(prev=>prev.filter(p=>p.id!==id));
  }
  function clearCart(){ setCart([]); }
  return <CartContext.Provider value={{cart,addToCart,decrementItem,removeFromCart,clearCart}}>{children}</CartContext.Provider>
}

export function useCart(){
  const ctx = useContext(CartContext);
  if(!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}

export { CartContext };
