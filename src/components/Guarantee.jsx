import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-5xl text-center border-champagne/20">
        <div className="w-20 h-20 bg-champagne/10 text-champagne rounded-full flex items-center justify-center mx-auto mb-10">
          <ShieldCheck size={40} />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">БИЗДИН КЕПИЛДИК</h2>
        
        <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed mb-12">
          Эгер сиз курсту олуттуу окуп, бирилген тапшырмаларды аткарып, бирок кирешеге чыгууну түшүнбөсөңүз — <span className="text-champagne font-black">төлөмдү толугу менен кайтарып беребиз</span>. Эч кандай көйгөй жок.
        </p>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
        
        <p className="text-2xl md:text-3xl font-black leading-tight mb-12 italic">
          "Бүгүн адамдар AI аркылуу акча таап жатышат. 6 айдан кийин рынок атаандаштыкка толуп кетет. Суроо жөнөкөй: Сиз азыр баштайсызбы же кийин кууп жүрөсүзбү?"
        </p>

        <button className="btn-premium px-12 py-6 text-xl">
          Тарифти тандоо
        </button>
      </div>
    </section>
  );
};

export default Guarantee;
