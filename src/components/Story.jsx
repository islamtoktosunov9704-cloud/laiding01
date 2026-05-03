import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current.querySelectorAll('.word');
      
      gsap.from(words, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
        opacity: 0.1,
        y: 10,
        stagger: 0.1,
        ease: "none"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const content = "Мен 6 жылдан ашык убакыттан бери IT тармагындамын жана мага акча табуу эч качан мынчалык оңой болгон эмес. Чынында, мен азыр дээрлик иштебейм, жөн гана тапшырмаларды жасалма интеллектке тапшырам жана кардарлар менен баарлашам. Мен жасалма интеллект жардамы менен аткарган бир буйрутмам аркылуу 60 күндүн ичинде 7500$ иштеп таптым. Өткөн жумада болсо жасалма интеллект мага 2 сааттын ичинде бот жасап берди жана кардар бул үчүн 500$ төлөдү. Ошондуктан, мен бардык билимимди топтоп, сизге нөлдөн баштап, бир гана жасалма интеллект жардамы менен киреше табууну үйрөтө турган өтө жөнөкөй курс даярдадым... Мен болсо жаныңызда болом жана бардык суроолоруңузга жардам берем!";

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-champagne font-mono text-sm mb-8 tracking-[0.3em] uppercase">Экспертизаны көрсөтүү</h2>
        
        <p ref={textRef} className="text-3xl md:text-5xl font-medium leading-[1.3] tracking-tight">
          {content.split(' ').map((word, i) => {
            const isEmphasis = ["оңой", "нөлдөн", "жардам", "берем!", "эч", "качан"].includes(word.toLowerCase().replace(/[.,!]/g, ''));
            const isMoney = word === "7500$" || word === "500$";
            
            return (
              <span key={i} className={`word inline-block mr-[0.2em] transition-colors duration-300 ${isEmphasis ? 'text-white font-semibold' : ''}`}>
                {isMoney ? (
                  <span className="text-champagne font-black">{word}</span>
                ) : word}
              </span>
            );
          })}
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/10 pt-16">
          <div className="flex flex-col gap-4">
            <span className="text-4xl font-black text-champagne">6+ ЖЫЛ</span>
            <span className="text-white/40 text-sm font-mono uppercase tracking-widest">IT ТАРМАГЫНДАГЫ ТАЖРЫЙБА</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-4xl font-black text-champagne">100% ЖИ</span>
            <span className="text-white/40 text-sm font-mono uppercase tracking-widest">АВТОМАТТАШТЫРЫЛГАН ИШ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
