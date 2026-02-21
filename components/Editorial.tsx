
import React from 'react';

const Editorial: React.FC = () => {
  return (
    <section className="py-48 px-6 md:px-24 bg-[#0a0a0a] border-y border-primary/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="serif-font text-6xl text-white leading-tight">As Seen In<br/><span className="text-primary italic">Global Editorials</span></h2>
            <p className="text-white/50 text-xl leading-relaxed max-w-md">Our creations define the next era of luxury adornment in the world's leading fashion bibles.</p>
          </div>
          
          <div className="grid grid-cols-2 gap-y-12 gap-x-8">
            {['VOGUE', 'BAZAAR', 'ELLE', 'T MAGAZINE'].map((brand) => (
              <div key={brand} className="text-white/30 font-black tracking-[0.5em] text-xl border-l border-primary/20 pl-4 hover:text-white transition-colors cursor-default">
                {brand}
              </div>
            ))}
          </div>
        </div>

        <div className="relative group rounded-sm overflow-hidden">
          <img 
            alt="Editorial Jewelry Feature" 
            className="w-full h-[600px] object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 shadow-2xl" 
            src="/img/render1.jpg.jpeg"
          />
          <div className="absolute inset-0 border border-primary/20 pointer-events-none m-6 group-hover:m-10 transition-all duration-700"></div>
          <div className="absolute bottom-10 right-10 bg-black/60 backdrop-blur-md p-6 border border-primary/20">
             <p className="text-white text-[10px] uppercase tracking-widest font-black italic">Design, 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
