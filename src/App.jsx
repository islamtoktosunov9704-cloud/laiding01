import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Features from './components/Features';
import Manifesto from './components/Manifesto';
import Roadmap from './components/Roadmap';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Global Scroll Smoothing or global animations can be initialized here
    // For now, we rely on individual component ScrollTriggers
  }, []);

  return (
    <div className="noise-bg min-h-screen font-sans selection:bg-champagne selection:text-obsidian">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Features />
        <Manifesto />
        <Roadmap />
        <Pricing />
        <FAQ />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
}

export default App;
