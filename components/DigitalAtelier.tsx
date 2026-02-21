
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

const DigitalAtelier: React.FC = () => {
  return (
    <section className="bg-background-dark py-12 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl md:text-7xl font-semibold text-white mb-6 md:mb-8">
                The Digital <br />
                <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-primary italic serif-font">
                  Atelier
                </span>
              </h2>
              <p className="max-w-xl mx-auto text-white/50 text-xs md:text-lg mb-8 md:mb-12 px-4">
                 Merging traditional Jaipur craftsmanship with advanced Matrix & Rhino 3D modeling. 
                 Visualize the impossible before it touches the metal.
              </p>
            </>
          }
        >
          <div className="relative w-full h-full">
            <img
                src="/img/animation.JPG.jpeg"
                alt="3D CAD Jewelry Design Interface"
                className="mx-auto rounded-2xl object-cover h-full w-full object-center grayscale hover:grayscale-0 transition-all duration-700"
                draggable={false}
            />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
          
                <div className="hidden md:block bg-primary/90 text-black px-4 py-2 text-[10px] uppercase tracking-widest font-black rounded-sm">
                    Manual Design
                </div>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}

export default DigitalAtelier;
