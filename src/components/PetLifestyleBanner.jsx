import React from 'react';

export default function PetLifestyleBanner() {
  const handleShopClick = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[420px] flex items-center justify-center p-8 sm:p-12 shadow-2xl">
          
          {/* Background Image with Green Theme Overlay */}
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1600"
            alt="Happier Pets Lifestyle"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/80 to-green-950/70" />

          {/* Banner Content */}
          <div className="relative z-10 text-center max-w-2xl text-white">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-lime-400 bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4 backdrop-blur-md border border-white/10">
              Everyday Pet Wellness
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
              Small Daily Steps. Happier Pets.
            </h2>

            <p className="text-base sm:text-lg text-green-100 font-medium leading-relaxed mb-8">
              Join thousands of pet parents who have made daily powder supplements a effortless part of their pet's mealtime routine.
            </p>

            <button
              onClick={handleShopClick}
              className="bg-lime-400 hover:bg-lime-300 text-green-950 font-extrabold text-base sm:text-lg px-9 py-4 rounded-xl shadow-xl shadow-lime-400/20 transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center min-h-[48px]"
            >
              Shop PETPOP
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
