import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

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
            <a href="#" className="hover:text-brand-lime transition-colors" aria-label="X (formerly Twitter)">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
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