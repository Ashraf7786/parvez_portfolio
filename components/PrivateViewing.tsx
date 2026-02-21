import React from 'react';

const PrivateViewing: React.FC = () => {
  return (
    <section className="py-28 px-6 md:px-20 bg-[#050505]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10">
          <img
            src="/img/5.png"  // you can change to your own image
            alt="Private Design Consultation"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </div>

        {/* Content */}
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl text-white serif-font leading-tight">
            One-to-One Design Consultation
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Book a private session to explore designs, discuss custom concepts,
            and bring your ideas to life. Whether it's a handmade sketch or a
            complete jewelry piece, every project begins with a personal
            conversation.
          </p>

          <div className="flex flex-col md:flex-row gap-6 pt-6 justify-center md:justify-start">

            <button className="bg-primary text-black px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-white transition duration-300 shadow-lg">
              Book Appointment
            </button>

            <button className="border border-primary text-primary px-10 py-4 text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-black transition duration-300">
              Contact Designer
            </button>

          </div>

          <div className="pt-6 text-white/40 text-sm">
            Available for online & in-person consultations.
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrivateViewing;
