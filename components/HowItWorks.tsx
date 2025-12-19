import React from 'react';
import { ClipboardList, Activity, Trophy } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardList size={40} />,
      title: "Sign Up for Free",
      description: "Enter your email below to instantly access the 7-day challenge dashboard."
    },
    {
      icon: <Activity size={40} />,
      title: "Daily Workouts",
      description: "Receive a 20-minute high-intensity workout plan every morning."
    },
    {
      icon: <Trophy size={40} />,
      title: "See Real Results",
      description: "Track your progress and feel the difference in your energy and physique."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-dark border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://picsum.photos/seed/novafit-action/800/800" 
                  alt="Workout Action" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-brand-lime/10 mix-blend-overlay"></div>
             </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-10 uppercase italic">
              How It <span className="text-brand-lime">Works</span>
            </h2>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full border-2 border-brand-lime text-brand-lime flex items-center justify-center font-bold text-xl relative">
                      <span className="absolute -top-3 -right-3 w-8 h-8 bg-brand-lime text-black rounded-full flex items-center justify-center text-sm font-bold border-4 border-brand-dark">
                        {index + 1}
                      </span>
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};