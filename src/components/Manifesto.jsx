import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Manifesto = () => {
  const containerRef = useRef(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })
      .from(".problem-text", {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
      })
      .from(solutionRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "expo.out"
      }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="problem-text">
          <h2 className="text-white/40 font-mono text-sm mb-6 tracking-widest uppercase">Көпчүлүктүн көйгөйү эмнеде?</h2>
          <p className="text-2xl md:text-3xl text-white/70 font-medium leading-relaxed italic">
            "Адамдар видеолорду көрүшөт, AI жөнүндө окушат, эмнедир кылууга аракет кылышат, бирок муну кимге жана кантип сатууну түшүнүшпөйт. Натыйжада — убакыт өтөт, пайда болсо жок."
          </p>
        </div>

        <div ref={solutionRef} className="relative p-12 md:p-16 rounded-5xl bg-white text-obsidian overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <div className="w-4 h-4 rounded-full bg-obsidian animate-ping" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Биз жөн гана билим бербейбиз. <span className="text-champagne drop-shadow-sm">Биз СИСТЕМА беребиз:</span></h2>
          
          <ul className="space-y-4 text-lg md:text-xl font-bold opacity-80">
            <li className="flex items-start gap-4">
              <span className="text-champagne">—</span>
              Так эмне кылуу керек?
            </li>
            <li className="flex items-start gap-4">
              <span className="text-champagne">—</span>
              Кандай тартипте?
            </li>
            <li className="flex items-start gap-4">
              <span className="text-champagne">—</span>
              Кимге сатуу керек?
            </li>
            <li className="flex items-start gap-4">
              <span className="text-champagne">—</span>
              Канча акы алуу керек?
            </li>
            <li className="flex items-start gap-4">
              <span className="text-champagne">—</span>
              Кантип туруктуу кирешеге чыгууга болот?
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
