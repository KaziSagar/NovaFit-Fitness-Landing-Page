import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/novafit-hero/1920/1080"
          alt="Fitness Training"
          className="w-full h-full object-cover object-center grayscale brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-brand-lime/20 text-brand-lime border border-brand-lime/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            Free 7-Day Challenge
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 italic">
            TRANSFORM <br />
            YOUR BODY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-green-400">
              IN JUST 7 DAYS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
            Join our free fitness challenge and kickstart your journey today. No equipment needed, just pure dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#join"
              className="group bg-brand-lime text-black px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wide hover:bg-brand-limeHover transition-all flex items-center justify-center gap-2"
            >
              Join Free Challenge
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wide border border-white/20 hover:bg-white/10 transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-black to-transparent"></div>
    </section>
  );
};