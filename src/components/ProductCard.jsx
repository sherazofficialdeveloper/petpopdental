import React, { useState } from 'react';
import { FiCheck, FiShoppingBag, FiEye, FiStar } from 'react-icons/fi';

export default function ProductCard({ product, onQuickView, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100/90 overflow-hidden transition-all duration-300 flex flex-col justify-between group">
      
      {/* Product Image & Badge Header */}
      <div className="relative bg-gray-50/80 p-6 flex items-center justify-center min-h-[260px] sm:min-h-[280px] overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 sm:h-60 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-sm"
        />

        {/* Quick View Overlay Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md backdrop-blur-sm opacity-90 hover:opacity-100 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
          title="Quick View"
          aria-label="Quick View"
        >
          <FiEye className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Product Details Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 mb-2 text-xs sm:text-sm">
            <span className="font-bold text-green-700 uppercase tracking-wider bg-green-50 px-2.5 py-0.5 rounded-md">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-bold">
              <FiStar className="fill-amber-400 w-4 h-4" />
              <span>{product.rating}</span>
              <span className="text-gray-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug mb-3 cursor-pointer hover:text-green-700 transition-colors"
          >
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-4 line-clamp-3">
            {product.description}
          </p>

          {/* Highlight Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {product.highlights.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md"
              >
                <FiCheck className="text-green-600 w-3.5 h-3.5" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & CTA Buttons */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {product.price}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium ml-2">
                / {product.size}
              </span>
            </div>
            <span className="text-xs font-bold text-green-700 bg-green-100/80 px-2.5 py-1 rounded-md">
              In Stock
            </span>
          </div>

          {/* Buttons: View Product & Add to Cart */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => onQuickView(product)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm sm:text-base py-3 px-3 rounded-xl transition-colors text-center min-h-[44px] flex items-center justify-center"
            >
              View Product
            </button>

            <button
              onClick={handleAdd}
              className={`w-full font-bold text-sm sm:text-base py-3 px-3 rounded-xl shadow-md transition-all duration-200 min-h-[44px] flex items-center justify-center gap-1.5 ${
                added
                  ? 'bg-green-800 text-white shadow-green-900/20'
                  : 'bg-green-600 hover:bg-green-700 text-white shadow-green-600/20 active:scale-95'
              }`}
            >
              {added ? (
                <>
                  <FiCheck className="w-5 h-5 text-lime-300" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <FiShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
