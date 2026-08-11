import React from 'react';
import { PRODUCTS } from '../data/products';
import { FiCheckCircle, FiShoppingBag, FiArrowRight } from 'react-icons/fi';

export default function DentalFeature({ onQuickView, onAddToCart }) {
  const product = PRODUCTS.find((p) => p.id === 'dog-dental-powder') || PRODUCTS[1];

  const benefitsList = [
    'Daily Oral Care',
    'Tartar Support',
    'Plaque Support',
    'Breath Freshening',
    'Easy Powder Format'
  ];

  const handleShopClick = () => {
    onQuickView(product);
  };

  return (
    <section id="featured-dental" className="py-16 bg-emerald-50 border-y border-emerald-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Text Content & Benefits */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full w-fit mb-4">
              Dog Oral Health Formula
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-4">
              Simple Daily Dental Care
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed mb-6">
              Make oral care part of your dog's daily routine with an easy-to-use dental powder designed to support tartar, plaque and fresher breath.
            </p>

            {/* Benefits Badge List */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-emerald-200/80 shadow-sm mb-8">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-900 mb-4">
                Designed For Effortless Oral Routine
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefitsList.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-gray-800">
                    <FiCheckCircle className="text-emerald-600 w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleShopClick}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-lg shadow-emerald-700/20 transition-all duration-200 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Shop Dental Powder</span>
                <FiArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onAddToCart(product)}
                className="bg-white hover:bg-emerald-100/50 text-emerald-900 font-bold text-base sm:text-lg px-7 py-3.5 rounded-xl border border-emerald-300 transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                <FiShoppingBag className="w-5 h-5 text-emerald-700" />
                <span>Add to Cart ({product.price})</span>
              </button>
            </div>

          </div>

          {/* Large High Quality Product Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden bg-white p-4 sm:p-6 border border-emerald-200 shadow-xl group">
              <span className="absolute top-6 right-6 z-20 bg-emerald-800 text-white text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                All-Natural Oral Support
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className="mt-4 p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
                <div>
                  <span className="text-emerald-800 text-xs font-bold uppercase tracking-wider">Format</span>
                  <p className="text-gray-900 font-bold text-sm">5.29 oz (150g) Natural Powder</p>
                </div>
                <span className="text-emerald-800 font-extrabold text-xl">{product.price}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
