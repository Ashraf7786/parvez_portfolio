
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, PenTool, Layers, Cpu } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

const Contact: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal', {
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 70%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, rootRef.current || undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-20 md:py-48 px-6 md:px-24 bg-[#080808] relative overflow-hidden" id="contact">
      {/* CAD Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Left Column: Unique 3D Business Card */}
        <div className="w-full lg:w-1/2 contact-reveal perspective-1000">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="serif-font text-4xl md:text-7xl text-white font-bold italic mb-6">Let's Create<br/><span className="text-primary">Together</span></h2>
            <p className="text-white/40 text-sm md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
              Ready to bring your vision to life? Connect with the atelier for bespoke commissions using industry-leading CAD precision.
            </p>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
             <BusinessCard />
          </div>
        </div>

        {/* Right Column: Technical Inquiry Form */}
        <div className="w-full lg:w-5/12 contact-reveal">
          <div className="p-8 md:p-12 bg-[#0c0c0c] border border-primary/20 rounded-sm shadow-2xl relative overflow-hidden group">
            {/* Corner Accents looking like CAD markers */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/50"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/50"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50"></div>

            <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30">Project Blueprint</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>

            <form className="space-y-6 md:space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase text-primary tracking-[0.2em] font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">person</span> Client Name
                </label>
                <input 
                  className="w-full bg-white/5 border border-white/10 focus:border-primary/50 text-white px-4 py-3 rounded-none outline-none transition-all placeholder-white/20 text-sm" 
                  placeholder="Enter your full name" 
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase text-primary tracking-[0.2em] font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">diamond</span> Category
                  </label>
                  <select className="w-full bg-white/5 border border-white/10 focus:border-primary/50 text-white px-4 py-3 rounded-none outline-none appearance-none text-sm cursor-pointer">
                    <option className="bg-[#1a1a1a]">Bespoke Ring</option>
                    <option className="bg-[#1a1a1a]">Necklace</option>
                    <option className="bg-[#1a1a1a]">Earrings</option>
                    <option className="bg-[#1a1a1a]">CAD Modeling</option>
                  </select>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] uppercase text-primary tracking-[0.2em] font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">architecture</span> Method
                    </label>
                    <select className="w-full bg-white/5 border border-white/10 focus:border-primary/50 text-white px-4 py-3 rounded-none outline-none appearance-none text-sm cursor-pointer">
                        <option className="bg-[#1a1a1a]">Manual Sketch</option>
                        <option className="bg-[#1a1a1a]">3D (Rhino/Matrix)</option>
                        <option className="bg-[#1a1a1a]">Hybrid</option>
                    </select>
                </div>
              </div>
              
              <div className="space-y-2">
                 <label className="text-[10px] uppercase text-primary tracking-[0.2em] font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">description</span> Vision Details
                 </label>
                 <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 focus:border-primary/50 text-white px-4 py-3 rounded-none outline-none transition-all placeholder-white/20 text-sm resize-none"
                    placeholder="Describe your design requirements, metal preference, and inspiration..."
                 ></textarea>
              </div>

              <InteractiveHoverButton
                text="Initialize Request"
                className="w-full border-white/10 hover:border-primary"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[90vw] md:max-w-md aspect-[1.7/1] rounded-xl bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-none group"
    >
      {/* Glossy Effect */}
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
        style={{ mixBlendMode: 'overlay' }}
      ></div>

      {/* Content Layer */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10" style={{ transform: "translateZ(20px)" }}>
        <div className="flex justify-between items-start">
          <div>
             <h3 className="serif-font text-2xl md:text-3xl text-white font-bold tracking-wide">Parvez Khan</h3>
             <p className="text-primary text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mt-1">Jewellery Designer</p>
          </div>
          <div className="text-right">
             <div className="flex gap-2 justify-end mb-1">
                <Cpu size={14} className="text-white/40" />
                <PenTool size={14} className="text-white/40" />
                <Layers size={14} className="text-white/40" />
             </div>
             <p className="text-[6px] md:text-[8px] text-white/30 uppercase tracking-widest">Digital Atelier</p>
          </div>
        </div>

        <div className="space-y-2 md:space-y-3">
          <div className="flex items-center gap-3 group/item">
            <div className="p-2 bg-white/5 rounded-full group-hover/item:bg-primary group-hover/item:text-black transition-colors">
                <Phone size={14} className="text-primary group-hover/item:text-black transition-colors" />
            </div>
            <span className="text-white/60 text-[10px] md:text-xs font-mono tracking-wide group-hover/item:text-white transition-colors">+91 85028 40525</span>
          </div>
          
          <div className="flex items-center gap-3 group/item">
            <div className="p-2 bg-white/5 rounded-full group-hover/item:bg-primary group-hover/item:text-black transition-colors">
                <Mail size={14} className="text-primary group-hover/item:text-black transition-colors" />
            </div>
            <a href="mailto:parvezcreation00@gmail.com" className="text-white/60 text-[10px] md:text-xs font-mono tracking-wide group-hover/item:text-white transition-colors">parvezcreation00@gmail.com</a>
          </div>

          <div className="flex items-center gap-3 group/item">
            <div className="p-2 bg-white/5 rounded-full group-hover/item:bg-primary group-hover/item:text-black transition-colors">
                <MapPin size={14} className="text-primary group-hover/item:text-black transition-colors" />
            </div>
            <span className="text-white/60 text-[10px] md:text-xs font-mono tracking-wide group-hover/item:text-white transition-colors">Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 w-16 h-16 border border-primary/20 rounded-full flex items-center justify-center animate-spin-slow opacity-50" style={{ transform: "translateZ(10px)" }}>
         <div className="w-12 h-12 border border-white/10 rounded-full"></div>
      </div>
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] rounded-xl"></div>
    </motion.div>
  );
};

export default Contact;
