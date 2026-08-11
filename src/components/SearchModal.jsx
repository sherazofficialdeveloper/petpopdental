import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { FiSearch, FiX } from 'react-icons/fi';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = PRODUCTS.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto font-sans">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-start justify-center p-4 pt-16 sm:p-6">
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all w-full max-w-2xl border border-gray-100 p-6">
          
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-900">Search PETPOP Store</h3>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 min-w-[40px] min-h-[40px] flex items-center justify-center"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <div className="my-4 relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Skin & Coat, Dental Powder, Omegas..."
              autoFocus
              className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-base font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600 min-h-[48px]"
            />
          </div>

          <div className="mt-4 max-h-80 overflow-y-auto space-y-3">
            {results.length === 0 ? (
              <p className="text-sm text-gray-500 text-center py-8">
                No matching PETPOP products found for "{searchTerm}".
              </p>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-gray-50 hover:bg-green-50/80 border border-gray-100 cursor-pointer transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-xl border border-gray-200"
                  />
                  <div className="flex-1">
                    <h4 className="text-base font-bold text-gray-900">
                      {product.name}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                      {product.description}
                    </p>
                    <span className="text-sm font-extrabold text-green-700">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
