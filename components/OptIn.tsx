import React, { useState } from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

export const OptIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real app, this would send data to an API
    }
  };

  return (
    <section id="join" className="py-24 bg-brand-lime text-black relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase italic tracking-tight">
            Ready to <span className="text-white drop-shadow-md">Level Up?</span>
          </h2>
          <p className="text-lg md:text-xl font-medium mb-10 text-black/80">
            Join 15,000+ others who have transformed their lives. 
            Sign up now for your <span className="font-bold border-b-2 border-black">free 7-day challenge</span>.
          </p>

          {isSubmitted ? (
            <div className="bg-white/90 backdrop-blur rounded-2xl p-8 animate-fadeIn flex flex-col items-center justify-center shadow-xl">
              <CheckCircle2 className="w-16 h-16 text-brand-lime mb-4" />
              <h3 className="text-2xl font-bold text-brand-black mb-2">You're In!</h3>
              <p className="text-gray-600">Check your inbox for Day 1 instructions.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full border-2 border-black/10 focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 bg-white placeholder-gray-500 text-lg"
              />
              <button
                type="submit"
                className="bg-brand-black text-brand-lime px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-900 transition-colors shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Start Challenge
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
          )}
          
          <p className="mt-6 text-sm opacity-60">
            *No credit card required. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};