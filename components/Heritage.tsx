
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const skills = [
  { 
    category: "Software Stacks", 
    title: "Rhino, Matrix & Corel", 
    desc: "proficiency in industry-standard CAD tools including Matrix , Rhino, Corel, and Infinite Design for precise 3D modeling and technical layout." 
  },
  { 
    category: "Design Expertise", 
    title: "Manual Sketching", 
    desc: "Strong foundation in manual design and hand-sketching techniques, bridging the gap between creative imagination and digital execution." 
  },
  { 
    category: "Knowledge Areas", 
    title: "Accessory Design", 
    desc: "Specialized expertise in crafting bespoke Pendants, Earrings, Rings, Necklaces, and Bangles, blending creativity with technical problem-solving." 
  }
];

const Heritage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate line on desktop
      if (window.innerWidth >= 768) {
        gsap.to(lineRef.current, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 30%',
            end: 'bottom 80%',
            scrub: true
          }
        });
      }

      gsap.from('.skill-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50, 
        opacity: 0, 
        stagger: 0.2, 
        duration: 1, 
        ease: 'power3.out'
      });
    }, sectionRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-48 px-6 md:px-24 bg-background-dark relative overflow-hidden" id="heritage">
      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-32">
        <h2 className="serif-font text-4xl md:text-7xl text-white mb-6 italic">Skills & Technology</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-8 md:w-12 h-px bg-primary/30"></div>
          <p className="text-primary tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold">Digital & Manual Arsenal</p>
          <div className="w-8 md:w-12 h-px bg-primary/30"></div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line - Desktop Only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/10 -translate-x-1/2"></div>
        <div 
          ref={lineRef}
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary -translate-x-1/2 origin-top scale-y-0"
        />

        {skills.map((s, i) => (
          <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-32 skill-reveal ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
            {/* Content Block */}
            <div className={`w-full md:w-[45%] text-left ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} space-y-3 md:space-y-4`}>
              <h3 className="serif-font text-xl md:text-2xl text-primary font-bold italic">{s.category}</h3>
              <h4 className="text-white text-2xl md:text-3xl font-light">{s.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed max-w-full md:max-w-xs md:ml-auto md:mr-0">{s.desc}</p>
            </div>
            
            {/* Central Dot - Desktop Only */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 border-4 border-background-dark shadow-[0_0_15px_rgba(184,155,122,0.5)]"></div>
            
            {/* Spacer for Flex - Desktop Only */}
            <div className="hidden md:block w-[45%]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Heritage;
