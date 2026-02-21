
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 px-6 md:px-12 flex items-center justify-between ${
      isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-primary/20' : 'bg-transparent py-6 md:py-8'
    }`}>
      {/* Logo */}
      <div className="flex flex-col cursor-pointer group z-50" onClick={() => scrollToSection('hero')}>
        <h1 className="text-lg md:text-2xl font-black tracking-[0.15em] serif-font text-white uppercase leading-none">
          Fusion Elegance
        </h1>
        <div className="flex items-center gap-2 mt-1 overflow-hidden">
          <div className="h-px bg-primary w-0 group-hover:w-8 transition-all duration-700"></div>
          <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-primary/80 font-bold whitespace-nowrap">
            by parvez khan
          </span>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex items-center gap-4 md:gap-6 z-50">
        <button 
          onClick={() => scrollToSection('private-viewing')}
          className="hidden sm:block text-[10px] uppercase tracking-widest font-black text-white/40 hover:text-primary transition-colors"
        >
          Jewellery Designer
        </button>
        <a 
          href="/parvezresume.pdf" 
          download="Parvez_Khan_Resume.pdf"
          className="bg-primary/10 border border-primary/40 px-6 py-2 md:px-8 md:py-3 text-[10px] uppercase tracking-[0.3em] font-black text-primary hover:bg-primary hover:text-black transition-all duration-500 shadow-lg flex items-center gap-2 group"
        >
          Resume
          <span className="material-symbols-outlined text-[12px] md:text-[14px] group-hover:animate-bounce">download</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
