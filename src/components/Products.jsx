import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

export default function Products({ onQuickView, onAddToCart }) {
  const [filter, setFilter] = useState('all');

  const filteredProducts = PRODUCTS.filter((item) => {
    if (filter === 'dogs') return item.category.includes('Dogs');
    if (filter === 'cats') return item.category.includes('Cats');
    return true;
  });

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-700 bg-green-100/90 px-4 py-1.5 rounded-full">
            Shop Our Products
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mt-3">
            Pet Care Made Simple
          </h2>
          <p className="text-base sm:text-xl text-gray-600 font-medium leading-relaxed mt-3">
            Simple daily wellness support for the pets you love.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1.5 rounded-2xl inline-flex gap-1.5 sm:gap-2 border border-gray-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all min-h-[44px] ${
                filter === 'all'
                  ? 'bg-green-700 text-white shadow-md'
                  : 'text-gray-700 hover:text-green-700 hover:bg-white/60'
              }`}
            >
              All Products ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setFilter('dogs')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all min-h-[44px] ${
                filter === 'dogs'
                  ? 'bg-green-700 text-white shadow-md'
                  : 'text-gray-700 hover:text-green-700 hover:bg-white/60'
              }`}
            >
              For Dogs
            </button>
            <button
              onClick={() => setFilter('cats')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm sm:text-base transition-all min-h-[44px] ${
                filter === 'cats'
                  ? 'bg-green-700 text-white shadow-md'
                  : 'text-gray-700 hover:text-green-700 hover:bg-white/60'
              }`}
            >
              For Cats
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-4xl mx-auto bg-green-50 border border-green-200/80 rounded-2xl p-6 text-center sm:flex sm:items-center sm:justify-between gap-4">
          <div className="text-left mb-3 sm:mb-0">
            <h4 className="text-base sm:text-lg font-bold text-green-900">
              Need help deciding which PETPOP product fits your pet?
            </h4>
            <p className="text-xs sm:text-sm text-green-700 font-medium">
              Both formulas feature convenient daily powder formats designed for effortless mixing over daily meals.
            </p>
          </div>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('faq');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm whitespace-nowrap min-h-[44px]"
          >
            Read FAQs
          </a>
        </div>

      </div>
    </section>
  );
}
