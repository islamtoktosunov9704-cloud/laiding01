import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Target, Zap, Clock, BookOpen, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Clock />,
    text: "Жумушуңуз бар, бирок кирешеңиз жетпесе",
  },
  {
    icon: <Zap />,
    text: "Күнүнө 2 сааттан ашык убакыт коротпостон кошумча киреше булагын кааласаңыз",
  },
  {
    icon: <Target />,
    text: "Жасалма интеллект жөнүндө уккансыз, бирок андан чындап акча табууну түшүнбөй жатсаңыз",
  },
  {
    icon: <BookOpen />,
    text: "Теория үчүн айлап убакыт кетирүүнү каалабасаңыз",
  },
  {
    icon: <Rocket />,
    text: "\"Мотивация\" эмес, тескерисинче түшүнүктүү, этап-этабы менен планды кааласаңыз",
  }
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Бул интенсив сизге туура келет, эгерде:</h2>
          <p className="text-white/40 font-mono uppercase tracking-widest text-sm">ФУНКЦИОНАЛДУУ АРТЕФАКТТАР</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card glass-card p-10 rounded-5xl hover:bg-white/[0.05] transition-all duration-500 group">
              <div className="w-12 h-12 rounded-2xl bg-champagne/10 text-champagne flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <p className="text-xl font-medium leading-relaxed">{feature.text}</p>
            </div>
          ))}
          
          <div className="feature-card bg-champagne p-10 rounded-5xl text-obsidian flex flex-col justify-between">
            <h3 className="text-2xl font-black">НЕГИЗГИ ПУНКТ:</h3>
            <p className="text-xl font-bold mt-4 leading-tight">
              Бул курс "технологиялар" жөнүндө эмес, технологиялар аркылуу <span className="underline decoration-2 underline-offset-4">АКЧА ТАБУУ</span> жөнүндө.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
