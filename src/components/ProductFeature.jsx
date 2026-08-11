import React from 'react';
import { PRODUCTS } from '../data/products';
import { FiCheckCircle, FiShoppingBag, FiArrowRight } from 'react-icons/fi';

export default function ProductFeature({ onQuickView, onAddToCart }) {
  const product = PRODUCTS.find((p) => p.id === 'skin-coat-support') || PRODUCTS[0];

  const benefitsList = [
    'Omega 3, 6 & 9',
    'Biotin & Vitamin C',
    'Chicken Flavor',
    'Easy to Mix',
    'For Dogs & Cats'
  ];

  const handleShopClick = () => {
    onQuickView(product);
  };

  return (
    <section id="featured-skin" className="py-16 bg-gradient-to-br from-green-900 via-green-800 to-green-950 text-white overflow-hidden relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Large High Quality Product Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-white/10 p-4 sm:p-6 backdrop-blur-md border border-white/20 shadow-2xl group">
              <span className="absolute top-6 left-6 z-20 bg-lime-400 text-green-950 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                Featured Wellness Formula
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover rounded-2xl shadow-inner group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-6 bottom-6 bg-green-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-lime-400 text-xs font-bold uppercase tracking-wider">Servings</span>
                  <p className="text-white font-bold text-sm">6.36 oz (180g) Easy Scoop Tub</p>
                </div>
                <span className="text-lime-300 font-extrabold text-xl">{product.price}</span>
              </div>
            </div>
          </div>

          {/* Text Content & Benefits */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-lime-400 bg-white/10 px-4 py-1.5 rounded-full w-fit backdrop-blur-sm border border-white/10 mb-4">
              Skin &amp; Coat Support
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Healthy Skin. Shiny Coat. Happy Pet.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-green-100 font-normal leading-relaxed mb-6">
              An easy-mix daily supplement designed to support healthy skin and a shiny coat for dogs and cats.
            </p>

            {/* Benefits Badge List */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15 mb-8">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-lime-300 mb-4">
                Key Nutritional Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefitsList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-white">
                    <FiCheckCircle className="text-lime-400 w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShopClick}
                className="bg-lime-400 hover:bg-lime-300 text-green-950 font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg shadow-lime-400/20 transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Shop Skin &amp; Coat</span>
                <FiArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onAddToCart(product)}
                className="bg-white/15 hover:bg-white/25 text-white font-bold text-base sm:text-lg px-7 py-3.5 rounded-xl border border-white/30 backdrop-blur-md transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                <FiShoppingBag className="w-5 h-5 text-lime-300" />
                <span>Add to Cart ({product.price})</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
