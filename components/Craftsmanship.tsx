
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const principles = [
  { icon: 'computer', title: 'Digital Precision', desc: 'Expertise in Rhino and Matrix enables us to create mathematically perfect settings for the rarest gems.' },
  { icon: 'draw', title: 'Manual Artistry', desc: 'Every piece begins as a hand-drawn sketch, preserving the fluid, organic lines that only the human hand can conceive.' },
  { icon: 'layers', title: 'CorelDRAW Mastery', desc: 'Advanced technical layouting ensures every link and joint is engineered for comfort and lasting durability.' }
];

const Craftsmanship: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.craft-card', {
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.25,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, rootRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-20 md:py-48 px-6 md:px-24 bg-background-dark border-t border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-32 space-y-6">
          <h2 className="serif-font text-4xl md:text-7xl text-white">Technological Mastery</h2>
          <div className="flex items-center justify-center gap-4">
             <div className="w-8 md:w-12 h-px bg-primary/30"></div>
             <p className="text-primary tracking-[0.2em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs font-bold">Rhino • Matrix • Corel</p>
             <div className="w-8 md:w-12 h-px bg-primary/30"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          {principles.map((p, i) => (
            <div key={i} className="craft-card text-center p-8 md:p-12 border border-white/5 hover:border-primary/30 transition-all bg-gradient-to-b from-[#0f0f0f] to-background-dark rounded-sm group">
              <span className="material-symbols-outlined text-primary text-5xl md:text-6xl mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">{p.icon}</span>
              <h3 className="serif-font text-2xl md:text-3xl text-white mb-4 md:mb-6 italic">{p.title}</h3>
              <p className="text-white/40 sans-font leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
