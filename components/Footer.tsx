
import React from 'react';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        {/* Brand Column */}
        <div className="space-y-8">
          <div className="flex flex-col">
            <h2 className="text-2xl font-black tracking-widest serif-font text-white uppercase">
              Fusion Elegance
            </h2>
            <span className="text-[10px] uppercase tracking-[0.5em] text-primary/60 font-bold">
              by parvez khan
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed font-light italic">
            "Sculpting the extraordinary from the terrestrial. A fusion of Jaipur's artisanal heritage and modern digital precision."
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-primary hover:text-primary transition-all duration-500 group">
              <Instagram size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-primary hover:text-primary transition-all duration-500 group">
              <Facebook size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-primary hover:text-primary transition-all duration-500 group">
              <Youtube size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-primary hover:text-primary transition-all duration-500 group">
              <Twitter size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Creations (Based on Resume 'Knowledge Areas') */}
        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.5em] text-white font-black border-b border-primary/20 pb-4">Creations</h4>
          <ul className="space-y-4">
            {['Pendants', 'Statement Earrings', 'Signature Rings', 'Heirloom Necklaces', 'Bracelets & Bangles'].map(item => (
              <li key={item}>
                <a href="#" className="text-white/30 hover:text-primary transition-colors text-xs uppercase tracking-widest font-bold">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Expertise (Based on Resume 'Skills') */}
        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.5em] text-white font-black border-b border-primary/20 pb-4">Expertise</h4>
          <ul className="space-y-4">
            {['Manual Sketching', '3D Modeling (Rhino/Matrix)', 'Bespoke Design', 'Corel Layouts', 'Private Consultation'].map(item => (
              <li key={item}>
                <a href="#" className="text-white/30 hover:text-primary transition-colors text-xs uppercase tracking-widest font-bold">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-8">
          <h4 className="text-[10px] uppercase tracking-[0.5em] text-white font-black border-b border-primary/20 pb-4">The Atelier Club</h4>
          <p className="text-white/40 text-xs leading-relaxed">Join our inner circle for exclusive previews of new masterworks and artisanal stories.</p>
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-transparent border-b border-white/10 py-3 text-white text-[10px] tracking-widest focus:border-primary outline-none transition-all placeholder-white/20"
            />
            <button className="w-full text-left text-[10px] uppercase tracking-[0.5em] text-primary font-black flex items-center justify-between group">
              Subscribe
              <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">trending_flat</span>
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-white/10 text-[9px] uppercase tracking-[0.4em] font-black">
          © 2024-26 Fusion Elegance • Designed in Jaipur • By Parvez Khan
        </p>
        <div className="flex gap-8">
          {['Privacy', 'Terms', 'Cookies'].map(link => (
            <a key={link} href="#" className="text-white/10 hover:text-white transition-colors text-[9px] uppercase tracking-widest">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
