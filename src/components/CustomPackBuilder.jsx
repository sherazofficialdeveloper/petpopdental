import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { HiCheck, HiPlus, HiSparkles, HiOutlineShoppingBag, HiCheckCircle } from 'react-icons/hi2';

export default function CustomPackBuilder({ onAddToCart }) {
  const [packSize, setPackSize] = useState(3); // 2, 3, or 4
  const [selectedIds, setSelectedIds] = useState(['skin-coat-support', 'dog-dental-powder', 'hip-joint-mobility']);
  const [added, setAdded] = useState(false);

  const getDiscountPercent = (size) => {
    if (size === 2) return 10;
    if (size === 3) return 15;
    if (size === 4) return 20;
    return 10;
  };

  const currentDiscount = getDiscountPercent(packSize);

  const toggleSelectProduct = (id) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length === 1) return; // Keep at least one selected
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      if (selectedIds.length >= packSize) {
        // Swap out the oldest selected item
        const newSelected = [...selectedIds.slice(1), id];
        setSelectedIds(newSelected);
      } else {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  const handlePackSizeChange = (newSize) => {
    setPackSize(newSize);
    if (selectedIds.length > newSize) {
      setSelectedIds(selectedIds.slice(0, newSize));
    }
  };

  const selectedProducts = PRODUCTS.filter((p) => selectedIds.includes(p.id));
  const rawTotal = selectedProducts.reduce((sum, p) => sum + p.numericPrice, 0);
  const discountAmount = rawTotal * (currentDiscount / 100);
  const finalPrice = rawTotal - discountAmount;

  const handleAddBundleToCart = () => {
    if (selectedProducts.length === 0) return;
    
    const bundleItem = {
      id: `custom-pack-${Date.now()}`,
      name: `Custom ${packSize}-Product PETPOP Bundle`,
      category: 'Custom Bundle',
      size: `${selectedProducts.length} Premium Powders`,
      price: `$${finalPrice.toFixed(2)}`,
      numericPrice: parseFloat(finalPrice.toFixed(2)),
      image: selectedProducts[0].image,
      quantity: 1,
      description: `Includes: ${selectedProducts.map((p) => p.name).join(', ')} (${currentDiscount}% Bundle Savings)`
    };

    onAddToCart(bundleItem, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="custom-pack" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-green-800 bg-green-100 px-4 py-1.5 rounded-full shadow-xs mb-3">
            <HiSparkles className="w-4 h-4 text-green-700" />
            <span>Custom Wellness Bundle</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Build Your Own PETPOP Pack
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mt-3">
            Mix and match your pet's daily supplements. Choose your pack size, unlock instant savings, and get free shipping automatically!
          </p>
        </div>

        {/* Step 1: Pack Size Selector */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-white p-2 sm:p-3 rounded-3xl shadow-sm border border-gray-200/80 grid grid-cols-3 gap-2 sm:gap-3 text-center">
            
            <button
              onClick={() => handlePackSizeChange(2)}
              className={`p-3 sm:p-4 rounded-2xl font-bold transition-all min-h-[56px] flex flex-col items-center justify-center ${
                packSize === 2
                  ? 'bg-green-700 text-white shadow-md scale-[1.02]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-sm sm:text-base font-black">2-Product Pack</span>
              <span className={`text-xs font-semibold ${packSize === 2 ? 'text-lime-200' : 'text-green-700'}`}>
                Save 10% OFF
              </span>
            </button>

            <button
              onClick={() => handlePackSizeChange(3)}
              className={`relative p-3 sm:p-4 rounded-2xl font-bold transition-all min-h-[56px] flex flex-col items-center justify-center ${
                packSize === 3
                  ? 'bg-green-700 text-white shadow-md scale-[1.02]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="absolute -top-3 bg-amber-400 text-gray-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                Most Popular
              </span>
              <span className="text-sm sm:text-base font-black">3-Product Pack</span>
              <span className={`text-xs font-semibold ${packSize === 3 ? 'text-lime-200' : 'text-green-700'}`}>
                Save 15% OFF
              </span>
            </button>

            <button
              onClick={() => handlePackSizeChange(4)}
              className={`p-3 sm:p-4 rounded-2xl font-bold transition-all min-h-[56px] flex flex-col items-center justify-center ${
                packSize === 4
                  ? 'bg-green-700 text-white shadow-md scale-[1.02]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-sm sm:text-base font-black">4-Product Pack</span>
              <span className={`text-xs font-semibold ${packSize === 4 ? 'text-lime-200' : 'text-green-700'}`}>
                Save 20% OFF
              </span>
            </button>

          </div>
        </div>

        {/* Selected Progress Banner */}
        <div className="max-w-3xl mx-auto mb-8 bg-green-50 border border-green-200 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <HiCheckCircle className="w-6 h-6 text-green-700 flex-shrink-0" />
            <div>
              <span className="text-sm font-black text-green-950">
                Selected {selectedIds.length} of {packSize} products
              </span>
              <p className="text-xs text-green-700 font-medium">
                {selectedIds.length < packSize
                  ? `Select ${packSize - selectedIds.length} more product${packSize - selectedIds.length > 1 ? 's' : ''} to complete your pack.`
                  : 'Your pack is complete! Enjoy your exclusive bundle discount.'}
              </p>
            </div>
          </div>
          <span className="bg-green-700 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-xl shadow-xs whitespace-nowrap">
            {currentDiscount}% Instant Savings Unlocked
          </span>
        </div>

        {/* Products Selection Grid (5 Available Products) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
          {PRODUCTS.map((product) => {
            const isSelected = selectedIds.includes(product.id);
            return (
              <div
                key={product.id}
                onClick={() => toggleSelectProduct(product.id)}
                className={`relative bg-white rounded-3xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'border-green-600 ring-2 ring-green-600/30 shadow-lg scale-[1.02]'
                    : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                }`}
              >
                {/* Selection Checkmark Badge */}
                <div className={`absolute top-4 right-4 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  isSelected ? 'bg-green-600 text-white shadow-sm' : 'bg-gray-100 text-gray-400 group-hover:bg-green-100 group-hover:text-green-700'
                }`}>
                  {isSelected ? <HiCheck className="w-4 h-4 stroke-[3]" /> : <HiPlus className="w-4 h-4" />}
                </div>

                <div>
                  <div className="bg-gray-50 rounded-2xl p-3 mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                    {product.category}
                  </span>

                  <h3 className="text-sm font-extrabold text-gray-900 leading-snug mb-1 line-clamp-2">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-500 font-normal mb-3">
                    {product.size} • {product.flavor}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-gray-900">
                    {product.price}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg transition-colors ${
                    isSelected ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 group-hover:bg-green-100 group-hover:text-green-800'
                  }`}>
                    {isSelected ? 'Selected' : '+ Add'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bundle Summary & CTA Box */}
        <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-lime-400 font-bold text-xs uppercase tracking-wider">
              <HiSparkles className="w-4 h-4" />
              <span>Custom {packSize}-Pack Summary</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              {selectedProducts.length} Premium Powders Included
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 font-normal max-w-md">
              {selectedProducts.map((p) => p.name.replace('PETPOP ', '')).join(' + ')}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
              <span className="text-xs text-lime-400 font-bold bg-lime-950/80 border border-lime-800/60 px-3 py-1 rounded-full">
                ✓ FREE US Delivery
              </span>
              <span className="text-xs text-gray-300 font-medium">
                30-Day Money-Back Guarantee
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
            <div className="text-center md:text-right">
              <div className="flex items-baseline justify-center md:justify-end gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  ${finalPrice.toFixed(2)}
                </span>
                <span className="text-base text-gray-400 line-through font-semibold">
                  ${rawTotal.toFixed(2)}
                </span>
              </div>
              <span className="text-xs font-bold text-lime-400">
                You Save ${discountAmount.toFixed(2)} ({currentDiscount}% OFF)
              </span>
            </div>

            <button
              onClick={handleAddBundleToCart}
              className={`w-full md:w-auto font-black text-base px-8 py-4 rounded-xl shadow-xl transition-all duration-200 flex items-center justify-center gap-2 min-h-[52px] ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-lime-400 hover:bg-lime-300 text-gray-950 shadow-lime-400/20 active:scale-95'
              }`}
            >
              {added ? (
                <>
                  <HiCheck className="w-5 h-5 text-white" />
                  <span>Custom Pack Added to Cart!</span>
                </>
              ) : (
                <>
                  <HiOutlineShoppingBag className="w-5 h-5" />
                  <span>Add Custom Pack to Cart</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
