import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-black py-4 px-6 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="BUTENCZ" className="h-12 w-12" />
          <span className="text-[#D4AF37] text-2xl font-serif">BUTENCZ</span>
        </Link>
        <div className="flex space-x-8">
          <Link to="/" className="text-[#D4AF37] hover:text-white transition-colors">Home</Link>
          <Link to="/about" className="text-[#D4AF37] hover:text-white transition-colors">About</Link>
          <Link to="/contact" className="text-[#D4AF37] hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}