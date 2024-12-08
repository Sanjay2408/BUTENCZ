import React from 'react';

interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function ProductCard({ name, price, description, image }: ProductCardProps) {
  return (
    <div className="bg-black border border-[#D4AF37] rounded-lg overflow-hidden transform transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-[#D4AF37] text-xl font-serif mb-2">{name}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-[#D4AF37] text-lg">{price}</span>
          <button className="bg-[#D4AF37] text-black px-4 py-2 rounded hover:bg-[#B4941F] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}