import React from 'react';
import { TRUST_BENEFITS } from '../data/products';
import { HiOutlineSparkles, HiOutlineHeart, HiOutlineCheckCircle, HiOutlineUsers } from 'react-icons/hi2';

export default function Benefits() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles':
        return <HiOutlineSparkles className="w-7 h-7 transition-all duration-300 group-hover:text-white group-hover:scale-110 text-green-700" />;
      case 'Heart':
        return <HiOutlineHeart className="w-7 h-7 transition-all duration-300 group-hover:text-white group-hover:scale-110 text-green-700" />;
      case 'Mix':
        return <HiOutlineCheckCircle className="w-7 h-7 transition-all duration-300 group-hover:text-white group-hover:scale-110 text-green-700" />;
      case 'Smile':
      default:
        return <HiOutlineUsers className="w-7 h-7 transition-all duration-300 group-hover:text-white group-hover:scale-110 text-green-700" />;
    }
  };

  return (
    <section className="py-14 bg-white border-y border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TRUST_BENEFITS.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center text-center p-7 rounded-3xl bg-gray-50/70 hover:bg-white border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Dedicated Icon Container with smooth background transition */}
              <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100/80 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-600 group-hover:shadow-lg group-hover:shadow-green-600/20">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-base font-bold text-gray-900 tracking-wider mb-2 uppercase">
                {item.title}
              </h3>
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
