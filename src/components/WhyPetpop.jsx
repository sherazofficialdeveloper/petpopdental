import React from 'react';
import { WHY_PETPOP } from '../data/products';
import { HiOutlineCheckCircle, HiOutlineSparkles, HiOutlineHeart, HiOutlineShieldCheck } from 'react-icons/hi2';

export default function WhyPetpop() {
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <HiOutlineSparkles className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 1:
        return <HiOutlineHeart className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 2:
        return <HiOutlineCheckCircle className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 3:
      default:
        return <HiOutlineShieldCheck className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
    }
  };

  return (
    <section id="why-petpop" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-800 bg-green-100 px-4 py-1.5 rounded-full mb-3 inline-block">
            Our Brand Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Why Pet Parents Choose PETPOP
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mt-3">
            Built with love, simplicity, and pure natural pet care at heart.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_PETPOP.map((card, idx) => (
            <div
              key={idx}
              className="group bg-gray-50/80 hover:bg-white rounded-3xl p-7 border border-gray-100 hover:border-green-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Dedicated Icon Container with Signature Hover Effect */}
                <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100/80 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-600 group-hover:shadow-lg group-hover:shadow-green-600/20">
                  {getIcon(idx)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 font-normal leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center text-xs font-bold text-green-700">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                <span>PETPOP Quality Guarantee</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
