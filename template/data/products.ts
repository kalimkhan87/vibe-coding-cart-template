export const products = Array.from({length:12}).map((_,i)=>({
  id: 'p'+(i+1),
  title: `Product ${(i+1)}`,
  price: `${(9+i)*99}.00`,
  img: `https://picsum.photos/600/400?product${i+1}`,
  category: i%3===0? 'Electronics' : i%3===1? 'Home' : 'Fashion',
  desc: 'Nice product description here.'
}));
