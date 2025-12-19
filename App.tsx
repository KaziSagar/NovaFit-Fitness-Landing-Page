import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { OptIn } from './components/OptIn';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-lime selection:text-black">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <OptIn />
      </main>
      <Footer />
    </div>
  );
};

export default App;