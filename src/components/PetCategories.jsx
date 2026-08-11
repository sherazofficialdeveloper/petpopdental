import React from 'react';
import { PET_CATEGORIES } from '../data/products';

export default function PetCategories({ onSelectCategory = () => {} }) {
  return (
    <section className="py-10 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-700 bg-green-100/80 px-3.5 py-1 rounded-full">
            Pet Care Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
            Shop for Your Pet
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2 font-medium">
            Tailored daily wellness formulas crafted for dogs and cats.
          </p>
        </div>

        {/* Categories Grid - Matching Reference Layout with Circular Avatars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {PET_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => {
                const el = document.getElementById('products');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 p-1.5 bg-gradient-to-tr from-green-500 to-lime-400 group-hover:scale-105 transition-transform duration-200 shadow-md">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                {cat.count}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
