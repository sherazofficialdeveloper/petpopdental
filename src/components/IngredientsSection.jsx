import React from 'react';
import { INGREDIENTS, QUALITY_PROMISES } from '../data/products';
import { HiOutlineSparkles, HiOutlineHeart, HiOutlineShieldCheck, HiOutlineSun, HiOutlineBolt, HiOutlineCheckCircle, HiOutlineTrophy } from 'react-icons/hi2';

export default function IngredientsSection() {
  const getIngredientIcon = (type) => {
    switch (type) {
      case 'Droplet':
        return <HiOutlineSparkles className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 'Leaf':
        return <HiOutlineHeart className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 'ShieldCheck':
        return <HiOutlineShieldCheck className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 'Activity':
        return <HiOutlineBolt className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 'Sun':
        return <HiOutlineSun className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 'Zap':
      default:
        return <HiOutlineSparkles className="w-7 h-7 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
    }
  };

  const getQualityIcon = (type) => {
    switch (type) {
      case 'Sparkles':
        return <HiOutlineSparkles className="w-6 h-6 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 'CheckCircle':
        return <HiOutlineCheckCircle className="w-6 h-6 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 'Shield':
        return <HiOutlineShieldCheck className="w-6 h-6 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
      case 'Award':
      default:
        return <HiOutlineTrophy className="w-6 h-6 text-green-700 transition-all duration-300 group-hover:text-white group-hover:scale-110" />;
    }
  };

  return (
    <section id="ingredients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-800 bg-green-100 px-4 py-1.5 rounded-full mb-3 inline-block">
            Clean &amp; Transparent Formulas
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Premium Ingredients You Can Trust
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mt-3">
            Every PETPOP supplement powder is formulated with pure, bioavailable ingredients. Zero hidden fillers, zero artificial dyes, and zero added sugars.
          </p>
        </div>

        {/* 6 Ingredient Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {INGREDIENTS.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-50/80 hover:bg-white rounded-3xl p-7 border border-gray-100 hover:border-green-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container with Signature Hover Effect */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100/80 flex items-center justify-center transition-all duration-300 group-hover:bg-green-600 group-hover:border-green-600 group-hover:shadow-md">
                    {getIngredientIcon(item.icon)}
                  </div>
                  <span className="text-xs font-bold text-green-800 bg-green-100 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-bold text-green-700 mb-3">
                  {item.sub}
                </p>
                <p className="text-sm text-gray-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-200/60 flex items-center gap-2 text-xs font-bold text-gray-700">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span>Active Daily Supplement Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Promises Bar */}
        <div className="bg-gradient-to-r from-green-900 via-gray-900 to-green-950 rounded-3xl p-8 text-white shadow-xl border border-green-900/50">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-black text-white">Our Clean Label Guarantee</h3>
            <p className="text-sm text-gray-300 font-normal mt-1">
              Crafted with uncompromising care for dogs and cats across North America.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUALITY_PROMISES.map((promise, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-green-800/80 border border-green-600/50 flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-green-500 group-hover:scale-105">
                  {getQualityIcon(promise.icon)}
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  {promise.title}
                </h4>
                <p className="text-xs text-gray-300 font-normal leading-relaxed">
                  {promise.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
