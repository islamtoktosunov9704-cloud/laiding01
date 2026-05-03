import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { clsx } from 'clsx';

const faqs = [
  {
    q: "IT тармагында тажрыйбам жок",
    a: "Катышуучулардын көбү тажрыйбасыз келишет. Биз эң жөнөкөй нерселерден баштайбыз жана кадам-кадам менен түшүндүрөбүз. Биз программалоону үйрөтпөйбүз, биз жасалма интеллектти курал катары колдонууну үйрөтөбүз."
  },
  {
    q: "Компьютерим алсыз",
    a: "Алгачкы киреше үчүн күчтүү компьютер шарт эмес. Жөнөкөй ноутбук жана интернеттин болушу жетиштүү. Негизги жумуш булуттук сервистерде (AI) аткарылат."
  },
  {
    q: "Убактым аз",
    a: "Программа бош эмес адамдар үчүн иштелип чыккан. Күнүнө 1–2 саат убакыт бөлүү жетиштүү."
  },
  {
    q: "Эгер окшошпосочу?",
    a: "Эгер сиз программаны толук өтүп, тапшырмаларды аткарып, бирок кирешеге карай алгачкы кадамдарды таштай албасаңыз — биз акчаңызды кайтарып беребиз. Биз да жоопкерчиликти өзүбүзгө алабыз."
  },
  {
    q: "Бул чындап иштейби?",
    a: "Бизнес тармагы азыртан эле жасалма интеллектти активдүү колдонуп жатат. Кеп AI иштеген-иштебегенинде эмес. Кеп сиз аны кирешеге айланта аласызбы же жокпу дегенде. Биз дал ушуну үйрөтөбүз."
  }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Көп берилүүчү суроолор</h2>
          <p className="text-white/40 font-mono uppercase tracking-widest text-sm">КӨП БЕРИЛҮҮЧҮ СУРООЛОР</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={clsx(
                "rounded-4xl border transition-all duration-500 overflow-hidden",
                openIdx === idx ? "bg-white/5 border-white/20" : "bg-transparent border-white/5"
              )}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors hover:text-champagne"
              >
                <span className="text-xl md:text-2xl font-bold">{faq.q}</span>
                <div className="flex-shrink-0 ml-4">
                  {openIdx === idx ? <Minus /> : <Plus />}
                </div>
              </button>
              
              <div 
                className={clsx(
                  "px-8 transition-all duration-500 ease-in-out",
                  openIdx === idx ? "max-h-[500px] pb-10 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-white/60 text-lg leading-relaxed border-t border-white/10 pt-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
