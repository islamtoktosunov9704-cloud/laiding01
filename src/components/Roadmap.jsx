import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    days: "1–2-күн",
    title: "Жасалма интеллекттин негиздери",
    desc: "Жасалма интеллект аркылуу татаал терминдерсиз кантип киреше табууну түшүнөсүз."
  },
  {
    days: "3–5-күн",
    title: "Реалдуу долбоорлор",
    desc: "Кардарларга көрсөтүүгө мүмкүн болгон 3 реалдуу долбоор түзөсүз."
  },
  {
    days: "6–7-күн",
    title: "Адис катары калыптануу",
    desc: "Өзүңүздү адис катары даярдайсыз. Баалуулукту жөнөкөй тилде түшүндүрүүнү үйрөнөсүз."
  },
  {
    days: "8-күн",
    title: "Кардар издөө",
    desc: "Кыргызстан же чет өлкөдөн кардарларды кайдан табуу керектигин үйрөнөсүз."
  },
  {
    days: "9-күн",
    title: "Баа саясаты",
    desc: "Бааны туура коюуну жана сумманы белгилөөнү үйрөнөсүз."
  },
  {
    days: "10-күн",
    title: "60 күндүк стратегия",
    desc: "60 күндүн ичинде 1000$+ кирешеге чыгуунун так планын түзөсүз."
  }
];

const Roadmap = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.roadmap-card');
      
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top ${150 + index * 40}px`,
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: "bottom bottom",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="program" ref={containerRef} className="py-32 px-6 bg-obsidian">
      <div className="max-w-4xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">10 күндүн ичинде эмнелерди кыласыз?</h2>
          <p className="text-white/40 font-mono uppercase tracking-widest text-sm">ЙОПИШКОКО ЙИГИЛУВЧИ АРХИВ</p>
        </div>

        <div className="space-y-12 pb-[30dvh]">
          {steps.map((step, idx) => (
            <div key={idx} className="roadmap-card glass-card p-12 rounded-5xl border-white/10 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <span className="inline-block px-4 py-1 rounded-full bg-champagne/10 text-champagne text-sm font-mono mb-4">
                    {step.days}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black mb-4">{step.title}</h3>
                  <p className="text-xl text-white/60 leading-relaxed max-w-xl">{step.desc}</p>
                </div>
                <div className="text-8xl font-black text-white/5 font-serif italic">
                  0{idx + 1}
                </div>
              </div>
            </div>
          ))}
          
          <div className="roadmap-card bg-champagne p-12 rounded-5xl text-obsidian shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-black mb-8">Жыйынтыгында сизде:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl font-bold">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-obsidian" />
                3 реалдуу долбоор
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-obsidian" />
                Даяр үлгүлөр
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-obsidian" />
                IT рынок түшүнүгү
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-obsidian" />
                60 күндүк так план
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
