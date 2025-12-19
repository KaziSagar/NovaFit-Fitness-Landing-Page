import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 bg-black text-gray-500 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-white italic tracking-tighter">
              NOVA<span className="text-brand-lime">FIT</span>
            </span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-lime transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-brand-lime transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-brand-lime transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-brand-lime transition-colors"><Youtube size={24} /></a>
          </div>

          <div className="text-sm">
            &copy; 2025 NovaFit. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};