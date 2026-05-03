import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: "START",
    price: "199$",
    desc: "Түшүнүп алууну жана сынап көрүүнү каалагандар үчүн.",
    features: ["10 күндүк билим", "Бардык материалдар", "Жалпы чат", "Сабактардын жазмасы"]
  },
  {
    name: "PRO",
    price: "349$",
    desc: "Тезирээк жана көзөмөл астында жыйынтык каалагандар үчүн.",
    features: [
      "START'тын баары", 
      "Долбоорлорду текшерүү", 
      "3 жандуу талкуу", 
      "Портфолиону талдоо", 
      "Кардар издөө үлгүлөрү", 
      "Жазышуу скрипттери"
    ],
    popular: true
  },
  {
    name: "VIP",
    price: "699$",
    desc: "Максималдуу ылдамдык жана устат менен жеке иштөөнү каалагандар үчүн.",
    features: [
      "PRO'нун баары", 
      "Жеке консультациялар", 
      "Индивидуалдык стратегия", 
      "Жазышууларды текшерүү", 
      "Жабык мини-чат"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Катышуу тарифтери</h2>
          <p className="text-white/40 font-mono uppercase tracking-widest text-sm">MEMBERSHIP / PRICING</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {tiers.map((tier, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-10 rounded-5xl border transition-all duration-500 ${
                tier.popular 
                  ? "bg-white text-obsidian border-white scale-105 z-10 shadow-[0_0_80px_rgba(255,255,255,0.1)] lg:-translate-y-4" 
                  : "glass-card border-white/10 text-white"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-champagne text-obsidian font-black text-xs tracking-widest uppercase">
                  ЭҢ ОММАБОП
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black mb-2">{tier.name}</h3>
                <div className="text-5xl font-black mb-4">{tier.price}</div>
                <p className={`text-sm font-medium leading-relaxed ${tier.popular ? "opacity-70" : "opacity-40"}`}>
                  {tier.desc}
                </p>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <Check size={18} className={tier.popular ? "text-champagne" : "text-white/40"} />
                    <span className="text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-full font-black text-lg transition-all duration-300 ${
                tier.popular 
                  ? "bg-obsidian text-white hover:bg-obsidian/90" 
                  : "bg-white text-obsidian hover:bg-white/90"
              }`}>
                Тандоо
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
