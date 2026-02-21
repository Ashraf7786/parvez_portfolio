
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Philosophy: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });

      gsap.from(imgRef.current, {
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 60%',
        },
        x: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      });
    }, rootRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-20 md:py-48 px-6 md:px-24 bg-background-dark border-y border-primary/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div ref={textRef} className="space-y-8 md:space-y-10 order-2 md:order-1">
          <div className="space-y-4">
            <h2 className="serif-font text-4xl md:text-6xl text-white">The Principal Designer</h2>
            <div className="w-16 h-px bg-primary"></div>
          </div>
          
          <h3 className="text-3xl md:text-4xl text-primary serif-font italic font-bold">Parvez Khan</h3>
          
          <p className="text-sm md:text-base leading-loose text-white/50 sans-font max-w-lg">
            A creative and detail-oriented accessory designer based in <strong>Jaipur, Rajasthan</strong>. Parvez blends artistic vision with technical mastery, specializing in <strong>Pendants, Earrings, Rings, Necklaces, and Bangles</strong>.
          </p>
          
          <div className="space-y-6">
            <div className="border-l-2 border-primary/30 pl-6 italic text-white/70">
              <p className="text-base md:text-lg serif-font leading-relaxed">
                "My strength lies in multitasking—blending manual sketching creativity with digital precision toolsets to ensure client satisfaction through innovation."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
              <div className="bg-neutral-dark/40 p-4 border border-white/5">
                <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">Education</p>
                <p className="text-white/80 text-[10px] uppercase tracking-tight">Diploma in Jewellery Design</p>
                <p className="text-white/40 text-[9px] uppercase">Gurukul Institution</p>
              </div>
              <div className="bg-neutral-dark/40 p-4 border border-white/5">
                <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">Knowledge Areas</p>
                <p className="text-white/80 text-[10px] uppercase tracking-tight">Accessories Design</p>
                <p className="text-white/40 text-[9px] uppercase">Bespoke Jewelry</p>
              </div>
            </div>
          </div>

          <div className="flex gap-12 pt-8">
            <div className="text-center">
              <p className="text-primary font-bold text-2xl tracking-tighter">8.0</p>
              <p className="text-[8px] text-white/30 uppercase tracking-[0.3em] font-black">Avg CGPA</p>
            </div>
            <div className="text-center border-l border-primary/10 pl-12">
              <p className="text-primary font-bold text-2xl tracking-tighter italic uppercase">Jaipur</p>
              <p className="text-[8px] text-white/30 uppercase tracking-[0.3em] font-black">Design Base</p>
            </div>
          </div>
        </div>

        <div ref={imgRef} className="relative group order-1 md:order-2">
          <div className="aspect-[3/4] bg-neutral-dark rounded-sm overflow-hidden border border-primary/10 shadow-2xl relative">
            <img 
              alt="Designer Studio Aesthetic" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 transform group-hover:scale-110 group-hover:grayscale-0" 
              src="/img/vertical portfolio.jpg.jpeg"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-all"></div>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border border-primary/20 z-[-1] animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-64 aspect-square border border-primary/10 z-[-1] hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
