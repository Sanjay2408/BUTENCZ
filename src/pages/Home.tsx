import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const products = [
    {
      name: "Floral Flame",
      price: "₹299",
      description: "A passionate blend of floral notes that ignites your senses.",
      image: "/logo.png"
    },
    {
      name: "Mystic Aura",
      price: "₹299",
      description: "An enigmatic fragrance that leaves a lasting impression.",
      image: "https://www.flaticon.com/free-icon/link_455691?term=link&page=1&position=3&origin=tag&related_id=455691"
    },
    {
      name: "Velvet Blue",
      price: "₹299",
      description: "A sophisticated scent wrapped in mystery and elegance.",
      image: "/logo.png"
    },
    {
      name: "Premium Collection",
      price: "₹799",
      description: "Experience all three signature fragrances in one luxury set.",
      image: "/logo.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <section className="h-[70vh] flex items-center justify-center mb-20 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-[#D4AF37]/20 to-black"></div>
          <div className="relative text-center">
            <h1 className="text-5xl font-serif text-[#D4AF37] mb-4">BUTENCZ</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              A Reusable Accessory for Prolonged Fragrance Retention with Innovative Perfume-Switching Capability
            </p>
          </div>
        </section>

        <h2 className="text-3xl font-serif text-[#D4AF37] mb-8 text-center">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}