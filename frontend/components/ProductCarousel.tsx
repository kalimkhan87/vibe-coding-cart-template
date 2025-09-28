"use client";
import { useState, useEffect } from 'react';
export default function ProductCarousel({images}:{images:string[]}) {
  const [i,setI]=useState(0);
  useEffect(()=>{ if(images.length===0) return; const t=setInterval(()=>setI(prev=>(prev+1)%images.length),2500); return ()=>clearInterval(t)},[images]);
  if(images.length===0) return null;
  return <div className="w-full h-40 overflow-hidden rounded"><img src={images[i]} alt={`img-${i}`} className="object-cover w-full h-full"/></div>
}
