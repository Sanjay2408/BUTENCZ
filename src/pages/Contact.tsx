import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-serif text-[#D4AF37] mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-black p-8 rounded-lg border border-[#D4AF37]">
            <h2 className="text-2xl font-serif text-[#D4AF37] mb-6">Get in Touch</h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-[#D4AF37] mb-2">Name</label>
                <input 
                  type="text"
                  className="w-full bg-gray-900 border border-[#D4AF37] rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              <div>
                <label className="block text-[#D4AF37] mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full bg-gray-900 border border-[#D4AF37] rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
              <div>
                <label className="block text-[#D4AF37] mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-900 border border-[#D4AF37] rounded p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                ></textarea>
              </div>
              <button className="w-full bg-[#D4AF37] text-black py-2 rounded hover:bg-[#B4941F] transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-black p-8 rounded-lg border border-[#D4AF37] mb-8">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="text-[#D4AF37]" />
                  <span>RV University, Bangalore</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="text-[#D4AF37]" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="text-[#D4AF37]" />
                  <span>contact@butencz.com</span>
                </div>
              </div>
            </div>

            <div className="w-full h-[450px] rounded-lg overflow-hidden border border-[#D4AF37]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7543344681235!2d77.4959947747931!3d12.923504815931532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafad1d6f18a4b9%3A0xc6082c1a24eba0bf!2sRV%20University!5e0!3m2!1sen!2sin!4v1733647491866!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}