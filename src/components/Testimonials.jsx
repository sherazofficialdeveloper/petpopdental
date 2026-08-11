import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { FiStar, FiCheck } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-800 bg-green-100 px-4 py-1.5 rounded-full mb-3">
            <HiOutlineSparkles className="w-4 h-4 text-green-700" />
            <span>Pet Parent Stories</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Loved by Over 30,000 Happy Tails
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mt-3">
            Real feedback from pet parents who transformed their pet's daily skin, coat, and dental care with PETPOP easy-mix powders.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-green-800 bg-green-50 px-2.5 py-0.5 rounded-md">
                    <FiCheck className="w-3.5 h-3.5 text-green-600" /> Verified Buyer
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-green-200"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      Parent of {item.pet}
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-green-700 bg-green-100/80 px-2.5 py-1 rounded-md">
                  {item.productName}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Trust Badge Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={TESTIMONIALS[0].avatar} alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={TESTIMONIALS[1].avatar} alt="User" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src={TESTIMONIALS[2].avatar} alt="User" />
            </div>
            <div>
              <span className="text-sm font-black text-gray-900 block">4.9 / 5.0 Star Rating Average</span>
              <span className="text-xs text-gray-500 font-normal">Based on 750+ verified pet parent reviews</span>
            </div>
          </div>

          <a
            href="#products"
            className="bg-green-700 hover:bg-green-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-xs transition-all min-h-[44px] flex items-center justify-center whitespace-nowrap"
          >
            Shop Customer Favorites
          </a>
        </div>

      </div>
    </section>
  );
}
