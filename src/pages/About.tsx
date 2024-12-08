import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif text-[#D4AF37] mb-8 text-center">About BUTENCZ</h1>
        
        <div className="bg-black p-8 rounded-lg border border-[#D4AF37] mb-12">
          <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">Our Story</h2>
          <p className="text-gray-300 mb-6">
            BUTENCZ was born from a vision to revolutionize the way we experience fragrances. Our innovative accessory 
            combines elegance with sustainability, offering a unique solution for fragrance enthusiasts who value both 
            luxury and environmental consciousness.
          </p>
          <p className="text-gray-300">
            What sets us apart is our commitment to sustainability and versatility. Our reusable accessory not only 
            prolongs fragrance retention but also allows for effortless perfume-switching, making it a perfect companion 
            for those who love to express themselves through different scents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black p-6 rounded-lg border border-[#D4AF37]">
            <h3 className="text-xl font-serif text-[#D4AF37] mb-3">Innovation</h3>
            <p className="text-gray-300">
              Pioneering technology in fragrance retention and switching capability.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg border border-[#D4AF37]">
            <h3 className="text-xl font-serif text-[#D4AF37] mb-3">Sustainability</h3>
            <p className="text-gray-300">
              Committed to reducing waste through reusable design.
            </p>
          </div>
          <div className="bg-black p-6 rounded-lg border border-[#D4AF37]">
            <h3 className="text-xl font-serif text-[#D4AF37] mb-3">Luxury</h3>
            <p className="text-gray-300">
              Premium quality materials and elegant design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}