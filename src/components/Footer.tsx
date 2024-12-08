import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-[#D4AF37] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">BUTENCZ</h3>
            <p className="text-gray-400">Redefining fragrance accessories with innovation and sustainability.</p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-[#D4AF37]">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#D4AF37]">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#D4AF37]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <ul className="text-gray-400 space-y-2">
              <li>RV University, Bangalore</li>
              <li>+91 1234567890</li>
              <li>contact@butencz.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-[#D4AF37] cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-[#D4AF37] cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-[#D4AF37] cursor-pointer" />
              <Mail className="w-6 h-6 text-gray-400 hover:text-[#D4AF37] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-[#D4AF37]/20 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 BUTENCZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}