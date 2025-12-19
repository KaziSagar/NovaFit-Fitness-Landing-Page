import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah J.",
      text: "I lost 3kg in one week! The workouts were short but super intense. Exactly what I needed.",
      image: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "Mike T.",
      text: "Best fitness program I’ve tried. No fluff, just results. The community support is amazing.",
      image: "https://picsum.photos/seed/user2/100/100"
    },
    {
      name: "Jessica R.",
      text: "Finally a challenge that I could stick to. I feel stronger and more energetic than ever.",
      image: "https://picsum.photos/seed/user3/100/100"
    }
  ];

  return (
    <section className="py-24 bg-brand-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 uppercase italic">
          Real People. <span className="text-brand-lime">Real Results.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-brand-gray p-8 rounded-2xl border border-white/5 relative"
            >
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-lime fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-8 text-lg">"{review.text}"</p>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-brand-lime"
                />
                <div className="text-left">
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs text-brand-lime uppercase tracking-wider">Verified Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};