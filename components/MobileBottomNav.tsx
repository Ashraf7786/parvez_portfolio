
import React from 'react';
import { Home, FileText, Phone } from 'lucide-react';

const MobileBottomNav: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full z-[60] bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 pb-4 pt-3 px-2 flex justify-around items-end md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      
      {/* Home */}
      <button 
        onClick={() => scrollToSection('hero')}
        className="flex flex-col items-center gap-1 min-w-[64px] group"
      >
        <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
          <Home size={20} className="text-white group-hover:text-primary transition-colors" />
        </div>
        <span className="text-[9px] uppercase tracking-widest font-bold text-white/60 group-hover:text-primary">Home</span>
      </button>

      {/* Resume / Project PDF */}
      <a 
        href="/resume.pdf" 
        download="Parvez_Khan_Resume.pdf"
        className="flex flex-col items-center gap-1 min-w-[64px] group"
      >
        <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
          <FileText size={20} className="text-primary" />
        </div>
        <span className="text-[9px] uppercase tracking-widest font-bold text-white/60 group-hover:text-primary">Resume</span>
      </a>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/918502840525" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-1 min-w-[64px] group"
      >
        <div className="p-2 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 transition-colors border border-[#25D366]/20">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0007 2C6.47969 2 2.00073 6.47896 2.00073 12C2.00073 13.8213 2.50289 15.524 3.3768 16.9946L2.14925 21.6215L6.90696 20.324C8.32924 21.1189 9.98816 21.5714 11.7512 21.5714H12.0007C17.5218 21.5714 22.0007 17.0925 22.0007 11.5714C22.0007 6.05039 17.5218 2 12.0007 2ZM12.0007 19.8571C10.4283 19.8571 8.9419 19.4239 7.64916 18.671L7.33425 18.4795L4.47164 19.2458L5.23277 16.3814L5.02534 16.0392C4.19455 14.6548 3.71498 13.0456 3.71498 11.3393C3.71498 6.78652 7.42944 3.07143 11.9822 3.07143C16.5349 3.07143 20.2494 6.78652 20.2494 11.3393C20.2494 15.8921 16.5349 19.6071 11.9822 19.6071H12.0007V19.8571ZM16.3276 14.7357C16.0892 14.6186 14.9312 14.0326 14.7171 13.9538C14.5029 13.875 14.3468 13.8375 14.1907 14.0722C14.0345 14.3069 13.5873 14.8329 13.4509 14.9891C13.3145 15.1453 13.1782 15.1646 12.9444 15.0475C12.7107 14.9304 11.9566 14.6781 11.0638 13.8631C10.3689 13.2285 9.89973 12.4442 9.76332 12.2096C9.62691 11.975 9.74868 11.8465 9.86571 11.7282C9.97086 11.6219 10.0993 11.4506 10.2163 11.3142C10.3333 11.1778 10.3723 11.0801 10.4503 10.9239C10.5283 10.7676 10.4893 10.6312 10.4308 10.5141C10.3723 10.3969 9.9046 9.22501 9.70932 8.75626C9.51405 8.28751 9.31877 8.36563 9.18236 8.36563C9.06528 8.36563 8.92887 8.36563 8.79246 8.36563C8.65605 8.36563 8.44143 8.42421 8.24615 8.61957C8.05088 8.81492 7.50462 9.34215 7.50462 10.4164C7.50462 11.4907 8.26575 12.5259 8.38278 12.6822C8.49981 12.8384 9.92211 15.1453 12.1837 16.045C13.7846 16.6814 14.4087 16.6033 15.0133 16.5447C15.6766 16.4804 16.9908 15.7578 17.2642 14.9569C17.5375 14.156 17.5375 13.4725 17.4595 13.3359C17.3814 13.1993 17.2253 13.1212 16.9914 13.0041H16.3276V14.7357Z" />
            </svg>
        </div>
        <span className="text-[9px] uppercase tracking-widest font-bold text-white/60 group-hover:text-primary">WhatsApp</span>
      </a>

      {/* Call */}
      <a 
        href="tel:+918502840525"
        className="flex flex-col items-center gap-1 min-w-[64px] group"
      >
        <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors border border-blue-500/20">
          <Phone size={20} className="text-blue-500" />
        </div>
        <span className="text-[9px] uppercase tracking-widest font-bold text-white/60 group-hover:text-primary">Call</span>
      </a>
    </div>
  );
};

export default MobileBottomNav;
