
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Home, Gem, Hammer, Briefcase, Mail, Cpu } from 'lucide-react';
import Navbar from './components/Navbar';
import { NavBar as TubelightNavBar } from './components/ui/tubelight-navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Collections from './components/Collections';
import Craftsmanship from './components/Craftsmanship';
import DigitalAtelier from './components/DigitalAtelier';
import Heritage from './components/Heritage';
import Portfolio from './components/Portfolio';
import Editorial from './components/Editorial';
import PrivateViewing from './components/PrivateViewing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import MobileBottomNav from './components/MobileBottomNav';

// Register ScrollTrigger globally once
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Passing the actual DOM element (ref.current) instead of the RefObject 
    // prevents circular structure serialization issues.
    const ctx = gsap.context(() => {
      // General animations
    }, mainRef.current || undefined);

    return () => ctx.revert();
  }, []);

  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'Collections', url: '#collections', icon: Gem },
    { name: 'Skills', url: '#heritage', icon: Cpu },
    { name: 'Craft', url: '#craftsmanship', icon: Hammer },
    { name: 'Portfolio', url: '#portfolio', icon: Briefcase },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return (
    <main ref={mainRef} className="bg-background-dark pb-24">
      <Navbar />
      
      {/* New Tubelight Navbar - Hidden on Mobile */}
      <TubelightNavBar items={navItems} className="hidden md:flex" />
      
      <section id="hero">
        <Hero />
      </section>

      <section id="philosophy">
        <Philosophy />
      </section>

      <section id="collections" className="horizontal-wrapper">
        <Collections />
      </section>

      <section id="craftsmanship">
        <Craftsmanship />
      </section>
      
      <section id="digital-atelier">
        <DigitalAtelier />
      </section>

      <section id="heritage">
        <Heritage />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="editorial">
        <Editorial />
      </section>

      <section id="private-viewing">
        <PrivateViewing />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      {/* Floating Direct Actions (WhatsApp & Call) - Desktop Only */}
      <FloatingActions />
      
      {/* Bottom Nav - Mobile Only */}
      <MobileBottomNav />
    </main>
  );
};

export default App;
