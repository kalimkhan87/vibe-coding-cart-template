"use client";
export default function Testimonial(){ 
  const items = [
    {id:'t1',name:'Asha',text:'Great products, fast delivery.'},
    {id:'t2',name:'Rahul',text:'Amazing quality and support.'},
    {id:'t3',name:'Maya',text:'Loved the shopping experience.'},
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(it=>(
          <div key={it.id} className="p-4 border rounded bg-white">
            <div className="font-semibold">{it.name}</div>
            <p className="text-sm text-gray-600 mt-2">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
