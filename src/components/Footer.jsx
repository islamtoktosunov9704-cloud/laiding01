import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white/5 pt-32 pb-16 px-6 rounded-t-[4rem]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-champagne flex items-center justify-center font-bold text-obsidian text-xs">AI</div>
              <span className="font-bold tracking-tighter text-2xl">SISTEMA</span>
            </div>
            <p className="text-white/40 leading-relaxed font-medium">
              Биз сизге технологияларды гана эмес, аларды кирешеге айлантуунун жолун үйрөтөбүз. Жасалма интеллект — бул сиздин жаңы мүмкүнчүлүгүңүз.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-mono text-xs text-white/20 uppercase tracking-widest mb-6">Баракчалар</h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li><a href="#about" className="hover:text-champagne transition-colors">Курс жөнүндө</a></li>
                <li><a href="#program" className="hover:text-champagne transition-colors">Программа</a></li>
                <li><a href="#pricing" className="hover:text-champagne transition-colors">Тарифтер</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs text-white/20 uppercase tracking-widest mb-6">Байланыш</h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li><a href="#" className="hover:text-champagne transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-champagne transition-colors">Instagram</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500/50 animate-ping" />
                </div>
                <span className="text-xs font-mono font-bold tracking-tighter opacity-60">СИСТЕМА АКТИВДҮҮ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/20 uppercase tracking-widest">
          <span>© 2026 AI SISTEMA. БАРДЫК УКУКТАР КОРГОЛГОН.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Купуялуулук саясаты</a>
            <a href="#" className="hover:text-white transition-colors">Келишим</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
