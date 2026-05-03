import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-0 right-0 z-[100] flex justify-center px-4">
      <div className={cn(
        "flex items-center justify-between w-full max-w-4xl px-6 py-3 rounded-full transition-all duration-500 border border-white/5",
        isScrolled ? "bg-obsidian/80 backdrop-blur-2xl border-white/10 py-2 shadow-2xl" : "bg-transparent"
      )}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-champagne flex items-center justify-center font-bold text-obsidian font-heading">AI</div>
          <span className="font-heading font-extrabold tracking-tighter text-xl">SISTEMA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[13px] font-bold text-white/50 tracking-wide uppercase">
          <a href="#about" className="hover:text-white transition-colors">Курс жөнүндө</a>
          <a href="#program" className="hover:text-white transition-colors">Программа</a>
          <a href="#pricing" className="hover:text-white transition-colors">Тарифтер</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <button className="px-6 py-2 rounded-full bg-white text-obsidian font-bold text-sm hover:scale-[1.05] transition-transform active:scale-95">
          Катышуу
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
