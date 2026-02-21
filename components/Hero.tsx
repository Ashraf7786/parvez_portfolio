
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { GooeyText } from './ui/gooey-text-morphing';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.to(bgRef.current, { scale: 1, duration: 4, ease: "power2.out" })
        .to(subRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=3")
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }, "-=2.5")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=2");

      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        y: 200,
        opacity: 0.5
      });
    }, heroRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 scale-110 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.7), rgba(10,10,10,0.95)), url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=2000')` 
        }}
      />
      
      <div className="relative z-10 text-center px-4 md:px-0 max-w-5xl mx-auto flex flex-col items-center w-full">
        <div className="text-reveal-mask overflow-hidden mb-4">
          <h2 
            ref={subRef}
            className="text-primary uppercase tracking-[0.2em] md:tracking-[0.6em] text-[10px] md:text-sm opacity-0 translate-y-full font-bold whitespace-nowrap"
          >
            Bespoke Jewellery Designer | Jaipur • India
          </h2>
        </div>
        
        <div className="text-reveal-mask overflow-hidden w-full flex flex-col items-center">
          <h1 
            ref={titleRef}
            className="serif-font text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold text-white mb-2 md:mb-4 opacity-0 translate-y-full leading-tight flex flex-col md:block"
          >
            <span>Artistry in </span>
            <div className="inline-block relative h-[1.2em] w-full md:w-auto min-w-[280px] md:min-w-[400px] align-bottom mt-2 md:mt-0">
               <div className="absolute inset-0 flex items-center justify-center">
                  <GooeyText 
                    texts={["Stone", "Gold", "Light", "Soul", "Form"]} 
                    morphTime={1.5}
                    cooldownTime={3}
                    textClassName="serif-font italic text-primary/80 font-bold text-4xl sm:text-7xl md:text-8xl lg:text-[10rem]"
                  />
               </div>
            </div>
          </h1>
        </div>

        <InteractiveHoverButton
          ref={ctaRef}
          text="Explore Archive"
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}
          className="opacity-0 translate-y-10 mt-8 md:mt-12"
        />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary/40">
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </div>
  );
};

export default Hero;
