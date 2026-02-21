import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ===== MAIN DESIGNS =====
const mainGallery = Array.from({ length: 10 }, (_, i) => ({
  img: `/img/${i + 1}.png`,
  title: `Main Design ${i + 1}`,
}));

// ===== MANUAL SKETCH DESIGNS =====
const manualGallery = Array.from({ length: 15 }, (_, i) => ({
  img: `/mannual/mannual${i + 1}.jpeg`,
  title: `Manual Sketch ${i + 1}`,
}));

// ===== CONCEPT DESIGNS =====
const conceptGallery = Array.from({ length: 4 }, (_, i) => ({
  img: `/img/${i + 16}.png`,
  title: `Concept ${i + 1}`,
}));

const Portfolio: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-title', {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-24 px-4 md:px-12 bg-[#050505]">

      {/* ===== MAIN SLIDER ===== */}
      <div className="mb-24">
        <h2 className="section-title text-4xl md:text-6xl text-white mb-12 text-center serif-font">
          Master Portfolio
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {mainGallery.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.img}
                alt={item.title}
                onClick={() => setSelectedImage(item.img)}
                className="w-full h-[400px] object-cover rounded-lg cursor-pointer hover:scale-105 transition duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== MANUAL SKETCH SLIDER ===== */}
      <div className="mb-24">
        <h2 className="section-title text-3xl md:text-5xl text-white mb-12 text-center serif-font">
          Manual Sketch Designs
        </h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {manualGallery.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.img}
                alt={item.title}
                onClick={() => setSelectedImage(item.img)}
                className="w-full h-[320px] object-cover rounded-lg cursor-pointer hover:scale-105 transition duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== CONCEPT SLIDER ===== */}
      <div>
        <h2 className="section-title text-3xl md:text-5xl text-white mb-12 text-center serif-font">
          Sketch & Concepts
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {conceptGallery.map((item, i) => (
            <SwiperSlide key={i}>
              <img
                src={item.img}
                alt={item.title}
                onClick={() => setSelectedImage(item.img)}
                className="w-full h-[350px] object-cover rounded-lg cursor-pointer hover:scale-105 transition duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== FULLSCREEN MODAL ===== */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6">
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />

          <button
            className="absolute top-6 right-8 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
