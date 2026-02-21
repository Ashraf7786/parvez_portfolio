import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const collections = [
  
   {
    title: "Design 1",
    subtitle: "Premium Concept",
    desc: "Handcrafted jewelry design created with precision and refined detailing.",
    img: "/img/render1.jpg.jpeg"
  },
  {
    title: "Design 2",
    subtitle: "Premium Concept",
    desc: "Handcrafted jewelry design created with precision and refined detailing.",
    img: "/img/render2.jpg.jpeg"
  },
  {
    title: "Design 3",
    subtitle: "Premium Concept",
    desc: "Handcrafted jewelry design created with precision and refined detailing.",
    img: "/img/animation.JPG.jpeg"
  },
  {
    title: "Design 4",
    subtitle: "Luxury Design",
    desc: "Modern high-end jewelry concept showcasing symmetry and gemstone brilliance.",
    img: "/img/6.png"
  },
  {
    title: "Design 5",
    subtitle: "Signature Finish",
    desc: "Elegant handcrafted structure with balanced proportions and timeless appeal.",
    img: "/img/7.png"
  }
];

const Collections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(".panel-item");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () =>
            "+=" + (containerRef.current?.offsetWidth || 3000)
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#050505] flex flex-col lg:flex-row lg:w-[400%] lg:h-screen w-full h-auto overflow-hidden"
    >
      {/* Intro Panel */}
      <div className="panel-item w-full lg:w-screen h-screen flex-shrink-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 border-b lg:border-b-0 lg:border-r border-white/5 relative">
        <h2 className="serif-font text-5xl md:text-6xl lg:text-8xl text-white mb-8 leading-tight">
          Signature<br />
          <span className="text-primary italic">Pieces</span>
        </h2>

        <div className="flex items-center gap-6">
          <p className="text-primary uppercase tracking-[0.5em] text-xs font-bold">
            Scroll to discover
          </p>
          <div className="w-24 h-px bg-primary/40"></div>
        </div>
      </div>

      {/* Product Panels */}
      {collections.map((item, i) => (
        <div
          key={i}
          className={`panel-item w-full lg:w-screen h-auto lg:h-screen flex-shrink-0 flex items-center justify-center py-24 lg:py-0 ${
            i % 2 === 0 ? "bg-[#080808]" : "bg-[#050505]"
          }`}
        >
          <div
            className={`flex flex-col ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-12 lg:gap-20 px-6 md:px-12 lg:px-24 w-full`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 aspect-[3/4] overflow-hidden rounded-lg group shadow-2xl relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 border border-white/10 pointer-events-none group-hover:inset-4 transition-all duration-500"></div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-left space-y-6 lg:space-y-8">
              <h3 className="serif-font text-3xl md:text-5xl lg:text-6xl text-white leading-tight">
                {item.title}
              </h3>

              <p className="text-primary text-lg font-medium tracking-wide">
                {item.subtitle}
              </p>

              <p className="text-white/40 max-w-sm text-base leading-relaxed">
                {item.desc}
              </p>

              <button className="flex items-center gap-4 group text-white text-xs uppercase tracking-widest font-bold">
                Details
                <span className="material-symbols-outlined text-primary group-hover:translate-x-3 transition-transform text-lg">
                  trending_flat
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collections;
