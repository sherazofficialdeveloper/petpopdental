import React from 'react';
import { HOW_IT_WORKS } from '../data/products';
import { HiOutlineShoppingBag, HiOutlineSparkles, HiOutlineHeart } from 'react-icons/hi2';

export default function HowItWorks() {
  const getStepIcon = (index) => {
    switch (index) {
      case 0:
        return <HiOutlineShoppingBag className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 1:
        return <HiOutlineSparkles className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 2:
      default:
        return <HiOutlineHeart className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-800 bg-green-100 px-4 py-1.5 rounded-full mb-3 inline-block">
            Simple 3-Step Routine
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            How PETPOP Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mt-3">
            No pills, no fighting with hard chews — just simple daily powder scoops mixed right over daily meals.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
            >
              <span className="absolute top-6 right-6 text-2xl font-black text-gray-200 group-hover:text-green-600/30 transition-colors">
                {item.step}
              </span>

              {/* Dedicated Icon Container with Signature Hover Effect */}
              <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100/80 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-600 group-hover:shadow-lg group-hover:shadow-green-600/20">
                {getStepIcon(idx)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
