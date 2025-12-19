import React from 'react';
import { Dumbbell, Zap, UserCheck } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Dumbbell className="w-8 h-8 text-black" />,
      title: "No Equipment",
      description: "Effective bodyweight exercises you can do anywhere, anytime. Your living room is your gym."
    },
    {
      icon: <Zap className="w-8 h-8 text-black" />,
      title: "Beginner Friendly",
      description: "Whether you're a pro or just starting, our scalable workouts adapt to your fitness level."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-black" />,
      title: "Expert Guidance",
      description: "Get daily tips, form checks, and motivation from certified trainers who care about your progress."
    }
  ];

  return (
    <section id="program" className="py-24 bg-brand-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase italic">
            Why Choose <span className="text-brand-lime">NovaFit</span>?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            We strip away the complexity. No gym fees, no fancy machines, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-brand-gray p-8 rounded-2xl border border-white/5 hover:border-brand-lime/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-brand-lime rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};