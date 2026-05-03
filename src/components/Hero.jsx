import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.2
      })
      .from(subRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90dvh] flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
      {/* Soft Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-bold tracking-[0.2em] text-champagne mb-10 uppercase">
          <Sparkles size={14} className="animate-pulse" />
          <span>ЖАСАЛМА ИНТЕЛЛЕКТ МЕНЕН КИРЕШЕ ТАБУУ</span>
        </div>

        <h1 ref={titleRef} className="text-5xl md:text-8xl font-black leading-[1.05] tracking-tight mb-10">
          3 реалдуу долбоор түзүп, <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-champagne via-[#F1C40F] to-champagne">1000$+</span> кирешеге чыгыңыз.
        </h1>

        <div ref={subRef} className="flex flex-wrap justify-center gap-6 md:gap-16 text-sm md:text-lg text-white/60 mb-16 font-medium">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-champagne shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
            Техникалык кыйынчылыктарсыз
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-champagne shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
            Устат менен иштөө
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-champagne shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
            Практикалык тажрыйба
          </div>
        </div>

        <div ref={ctaRef} className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button className="btn-premium w-full md:w-auto flex items-center justify-center gap-3 text-xl shadow-lg">
            Катышуу
            <ArrowRight size={22} />
          </button>
          <div className="flex flex-col items-center md:items-start text-[10px] text-white/30 font-bold tracking-widest uppercase">
            <span>ЧЕКТЕЛГЕН ОРУНДАР</span>
            <span className="text-champagne/50">ИНТЕНСИВ 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
