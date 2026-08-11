import React, { useState } from 'react';
import { HiXMark, HiPlus, HiMinus, HiCheckCircle } from 'react-icons/hi2';
import { FiStar, FiShoppingBag, FiCheck } from 'react-icons/fi';

export default function ProductModal({ product, isOpen, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl border border-gray-100">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close Modal"
          >
            <HiXMark className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 p-6 sm:p-8 gap-8 items-center">
            
            {/* Left Image */}
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Right Details */}
            <div className="flex flex-col justify-between">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <FiStar className="fill-amber-400 w-4 h-4" />
                    <span>{product.rating}</span>
                    <span className="text-gray-400 font-normal">({product.reviewsCount} reviews)</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-tight mb-2">
                  {product.name}
                </h2>

                <p className="text-xl sm:text-2xl font-extrabold text-green-800 mb-4">
                  {product.price} <span className="text-xs text-gray-500 font-normal">/ {product.size}</span>
                </p>

                <p className="text-sm text-gray-600 font-normal leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {product.features && product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-gray-800">
                      <HiCheckCircle className="text-green-600 w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Serving Note */}
                <div className="bg-green-50 p-3 rounded-xl border border-green-200/80 mb-6">
                  <p className="text-xs font-semibold text-green-900">
                    📌 <strong>Serving Note:</strong> Please follow the serving instructions provided on the product packaging.
                  </p>
                </div>
              </div>

              {/* Quantity & Add to Cart Controls */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-xl bg-gray-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-gray-600 hover:text-green-700 min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      <HiMinus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-bold text-gray-900">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-gray-600 hover:text-green-700 min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Increase quantity"
                    >
                      <HiPlus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAdd}
                  className={`w-full font-bold text-base py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 min-h-[48px] ${
                    added
                      ? 'bg-green-800 text-white'
                      : 'bg-green-600 hover:bg-green-700 text-white active:scale-95 shadow-green-600/20'
                  }`}
                >
                  {added ? (
                    <>
                      <FiCheck className="w-5 h-5 text-lime-300" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <FiShoppingBag className="w-5 h-5" />
                      <span>Add to Cart — ${(product.numericPrice * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
