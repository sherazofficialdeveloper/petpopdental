import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/products';
import { FiChevronLeft, FiChevronRight, FiCheckCircle } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

export default function Hero({ onNavigate = () => {} }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through slides every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleShopClick = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    const el = document.getElementById('why-petpop');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      id="hero" 
      className="relative bg-gradient-to-b from-green-50/70 via-white to-gray-50 overflow-hidden pt-4 pb-12 lg:py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Container */}
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100 min-h-[480px] lg:min-h-[560px] flex flex-col justify-between">
          
          {/* Background Image Carousel with Overlay */}
          <div className="absolute inset-0 z-0">
            {HERO_SLIDES.map((s, index) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={s.bgImage}
                  alt={s.title}
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradient Overlays for maximum text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent lg:w-3/5" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent lg:hidden" />
              </div>
            ))}
          </div>

          {/* Hero Content Overlay */}
          <div className="relative z-20 p-6 sm:p-10 lg:p-16 flex flex-col justify-center max-w-2xl text-white min-h-[440px] lg:min-h-[520px]">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-lime-400/90 text-green-950 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide w-fit mb-4 shadow-sm backdrop-blur-sm">
              <HiOutlineSparkles className="w-4 h-4 text-green-900" />
              <span>{slide.tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 drop-shadow-sm">
              Everyday Wellness for Happier Pets
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-100 font-normal leading-relaxed mb-8 max-w-xl">
              Simple daily wellness support for dogs and cats, designed to fit easily into your pet's everyday routine.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={handleShopClick}
                className="bg-lime-500 hover:bg-lime-400 text-green-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg shadow-lime-500/30 transition-all duration-200 hover:scale-[1.02] active:scale-95 text-center min-h-[48px] flex items-center justify-center"
              >
                Shop Products
              </button>
              <button
                onClick={handleExploreClick}
                className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 font-bold text-base sm:text-lg px-7 py-3.5 rounded-xl backdrop-blur-md transition-all duration-200 hover:border-white text-center min-h-[48px] flex items-center justify-center"
              >
                Explore PETPOP
              </button>
            </div>

            {/* Quick Highlights list */}
            <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-gray-200">
              <span className="flex items-center gap-1.5">
                <FiCheckCircle className="text-lime-400 w-4 h-4" /> 100% Easy-Mix Formats
              </span>
              <span className="flex items-center gap-1.5">
                <FiCheckCircle className="text-lime-400 w-4 h-4" /> For Dogs &amp; Cats
              </span>
              <span className="flex items-center gap-1.5">
                <FiCheckCircle className="text-lime-400 w-4 h-4" /> USA Standard Quality
              </span>
            </div>
          </div>

          {/* Carousel Controls (Arrows & Pagination Dots) */}
          <div className="relative z-20 px-6 pb-6 flex items-center justify-between text-white">
            
            {/* Pagination Dots */}
            <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-8 bg-lime-400' : 'w-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous Slide"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Next Slide"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

        {/* Secondary Promo Banner Bar - Inspired by reference layout */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-800 text-white p-5 rounded-2xl flex items-center justify-between shadow-md">
            <div>
              <span className="text-lime-300 text-xs font-bold uppercase tracking-wider">Repeat Savings</span>
              <h3 className="text-lg font-bold">Save 5% on Every Subscription</h3>
              <p className="text-xs text-green-100 mt-1">Automatic delivery right when your pet needs fresh powder.</p>
            </div>
            <button 
              onClick={handleShopClick}
              className="bg-lime-400 hover:bg-lime-300 text-green-950 font-bold text-xs px-4 py-2.5 rounded-xl whitespace-nowrap min-h-[40px]"
            >
              Subscribe &amp; Save
            </button>
          </div>

          <div className="bg-lime-100 text-green-950 p-5 rounded-2xl flex items-center justify-between border border-lime-200 shadow-sm">
            <div>
              <span className="text-green-800 text-xs font-bold uppercase tracking-wider">Daily Wellness</span>
              <h3 className="text-lg font-bold text-green-900">100% Powder Format Supplements</h3>
              <p className="text-xs text-green-800 mt-1">No pills or artificial capsules. Simple scoops into daily food.</p>
            </div>
            <button 
              onClick={handleShopClick}
              className="bg-green-700 hover:bg-green-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl whitespace-nowrap min-h-[40px]"
            >
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
